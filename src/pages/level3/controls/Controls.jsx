import { useKeyboardControls } from "@react-three/drei";
import { useAvatar } from "../../../context/AvatarContext";
import { useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";

export default function Controls() {

  const { avatar, setAvatar } = useAvatar();
  const [sub, get] = useKeyboardControls();
  const [sounds, setSounds] = useState({
    run: new Audio("/assets/sounds/run.wav"),
    walk: new Audio("/assets/sounds/walk.wav"),
    jump: new Audio("/assets/sounds/jump.wav"),
    // Agrega más sonidos aquí si es necesario
  });
  const [play, setPlay] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  // const position = avatar.rigidBodyAvatarRef?.translation();

  // Caminar
  useEffect(() => {
    const unsubscribe = sub(
      (state) => state.forward || state.backward || state.leftward || state.rightward,
      (pressed) => {
        setAvatar({ ...avatar, animation: pressed ? "Walk" : "Idle" });
        if (pressed) {
          sounds.walk.play();
        } else {
          sounds.walk.pause();
        }
      }
    );
    return () => unsubscribe();
  }, [avatar, setAvatar, sub, get]);

  // Correr
  useEffect(() => {
    const unsubscribe = sub(
      (state) => (state.forward || state.backward || state.leftward || state.rightward) && state.run,
      (pressed) => {
        setAvatar({ ...avatar, animation: pressed ? "Running" : "Idle" });
        if (pressed) {
          sounds.run.play();
        } else {
          sounds.run.pause();
        }
      }
    );
    return () => unsubscribe();
  }, [avatar, setAvatar, sub, get]);

  // Saltar
  useEffect(() => {
    const unsubscribe = sub(
        (state) => state.jump && !isJumping,
        () => {
            setAvatar({ ...avatar, animation: "Jump" });
            setIsJumping(true);
            setTimeout(() => {
                setAvatar({ ...avatar, animation: "Idle" });
                setIsJumping(false);
            }, 1000); // Duración de la animación de salto en milisegundos (1 segundo)
        }
    );
    return () => unsubscribe();
}, [avatar, setAvatar, sub, isJumping]);

// Bailar
useEffect(() => {
  const unsubscribe = sub(
      (state) => state.dance,
      () => {
          setAvatar({ ...avatar, animation: "Dance" });
      }
  );
  return () => unsubscribe();
}, [avatar, setAvatar, sub, get]);



  useEffect(() => {
    if (play) {
      sounds.run.currentTime = 0;
      sounds.run.volume = Math.random()
      sounds.run.play()
    } else {
      sounds.run.pause()
    }
  }, [play]);

  useFrame((state, delta) => {
    const { forward, backward, leftward, rightward } = get();
    if (forward || backward || leftward || rightward) {
      if (avatar.animation === "Walk") {
        sounds.walk.play();
      } else if (avatar.animation === "Running") {
        sounds.run.play();
      }
    } else {
      sounds.walk.pause();
      sounds.run.pause();
    }
  });
  

  return (
    null
  )
}