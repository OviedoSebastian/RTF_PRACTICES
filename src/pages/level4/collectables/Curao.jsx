import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useTexture } from "@react-three/drei";
import { RigidBody, useRigidBody } from "@react-three/rapier";

export default function Curao({
  props,
  catchCurao,
  curaitoCogio,
  player
}) {
  const { nodes, materials } = useGLTF("/assets/models/colectables/curao.glb");
  const [position, setPosition] = useState([10, 2, -10]);
  const [numeroDeBotellas, setNumeroDeBotellas] = useState(0);
  const [curaoBro, setCuraoBro] = useState(false);
  const [visible, setVisible] = useState(true);
  const refRigidBody = useRef();
  

  useEffect(() => {
    if (curaitoCogio) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, [curaitoCogio]);

  const [curaoSound] = useState(new Audio("/assets/sounds/CuraoSound.mp3"));

  const onCollisionEnter = ({ manifold, target, other }) => {
    // console.log("Collision at world position", manifold.solverContactPoint(0));
    // Aquí se puede saber si el jugador toco el objeto, se puede sacar otra propiedad para verificar
    // que ese jugador es el AvatarCientific?
    if ((other.colliderObject.name === "character-capsule-collider")) {
        console.log("Entre? xd");
        console.log(other.rigidBodyObject.name);
        
      
    }
  };

  const radius = 0.3;
  const speed = 5;
  /*
    useFrame(({ clock }) => {
      const elapsedTime = clock.getElapsedTime();
      const angle = elapsedTime * speed;
      const x = Math.sin(angle) * radius;
      const y = Math.cos(angle) * radius;
      // refRigidBody.current.rotation.y = angle;
  
      refRigidBody.current?.setTranslation(
        {
          x: position[0],
          y: position[1] + y,
          z: position[2],
        },
        true
      );
    });
  */


  return (
    <>
      {visible ?
        <RigidBody
          ref={refRigidBody}
          type="fixed"
          colliders="cuboid"
          onCollisionEnter={(e) => onCollisionEnter(e)}
          name="Curao"
          position={position}
        >
          <group
            {...props}
            dispose={null}
            ref={refRigidBody}
            rotation={[0, 2, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geometry_0.geometry}
              material={materials.Material_0}
            />
          </group>
        </RigidBody>
        : null}
    </>
  )
}

useGLTF.preload("/assets/models/colectables/curao.glb");