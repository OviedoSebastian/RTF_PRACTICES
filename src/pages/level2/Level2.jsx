import { KeyboardControls, Loader } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Suspense, useState, useEffect } from "react";
import WelcomeText from "./abstractions/WelcomeText";
import Lights from "./lights/Lights";
import Environments from "./staging/Environments";
import { Canvas } from "@react-three/fiber";
import World from "./world/World";
import Controls from "./controls/Controls";
import AvatarCientific from "./characters/avatar/AvatarCientific";
import useMovements from "../../utils/key-movements";
import { Perf } from "r3f-perf";
import Buttons from "../level1/View/Buttons";
import { useAuth } from "../../context/AuthContext";
import Logout from "../../components/logout/Logout";
import { createuser, readUser } from "../../db/users-collection";
import Ardilla from "./characters/avatar/Ardilla";
import Curao from "./colectibles/Curao";
import Curao2 from "./colectibles/Curao2";
import Curao3 from "./colectibles/Curao3";
import AvatarGhost from "./characters/enemies/AvatarGhost";
import { createcheckpoint, readCheckpoint } from "../../db/level2-collection";
import CharacterHudLevel2 from "./hud/CharacterHud";

export default function Level2() {

  const map = useMovements();
  const auth = useAuth();
  const [vida, setVida] = useState(3);
  const [curao, setCurao] = useState(0);
  const [jumpVel, setJumpVel] = useState(5);
  const [checkpoint, setCheckpoint] = useState(false);

  const saveDataUser = async (valueUser) =>{
    await createuser(valueUser)
  }
  
  const readDataUser = async (email) =>{
    await readUser(email)
    .then((res) => console.log(res))
    .catch((error) => console.error(error))
  }

  const saveDatacheckpoint = async (valueUser) =>{
    await createcheckpoint(valueUser)
  }
  
  const readDataCheckpoint = async (email) =>{
    await readCheckpoint(email)
    .then((res) => console.log(res))
    .catch((error) => console.error(error))
  }


  const savecheckpoint = () => {
    setCheckpoint(true);
    console.log("Progreso Guardado");

    const { email } = auth.userLogged;
    // console.log(displayName, email); //Verificar los datos a guardar
    saveDatacheckpoint({
        email: email,
        vidas: 2,
        curado: 4,
    });
    
    readDataCheckpoint(email); //Recupera el usuario guardado en la BD 
  };

  
  useEffect(() => {
      // para saber todos los valores que se pueden recuperar por medio del 
      // inicio de sesion por el correo, imprimir por oconsola lo siguiente console.log(auth.userLogged);
      if(auth.userLogged){

          const { displayName, email, photoURL } = auth.userLogged;

          console.log(displayName, email); //Verificar los datos a guardar
          
          saveDataUser({
              displayName: displayName,
              email: email,
              photoURL: photoURL,
          });
          
          readDataUser(email); //Recupera el usuario guardado en la BD 

      }
  }, [auth.userLogged])
//////////////////////////////////////////////////////////////////////////////////

  const resetPoint = () => {
    setVida(3);
  };

  const loseLife = () => {
    setVida((prevVida) => prevVida - 1);
  };

  const actualizarVida = (nuevaVida) => {
    setVida(nuevaVida);
  };

  const handleCurao = () => {
        setCurao((prevCurao) => prevCurao + 1);
        
};

  return (
    <>
    
    <KeyboardControls map={map}>
      <Buttons />
      {/* <Logout /> */}
      <Canvas
        camera={{
          position: [0, 1, 0],
        }}
      >
        <Perf position="top-left" />
        <Suspense fallback={null}>
          <Lights />
          <Environments />
          <Physics debug={false}>
            <World />
            {/* <AvatarEngineer /> */}
            <AvatarCientific
              jumpHeight={jumpVel}
              vida={vida}
              resetPoint={resetPoint}
            />
            <Ardilla position={[-21, 3, 5]} savecheckpoint={savecheckpoint}/>
            {/* <Ardilla position={[-15,1.28,5]}/> */}
            <AvatarGhost position={[37, -11.6, 60]} />
            <AvatarGhost position={[41, -11.6, -65]} />
            <AvatarGhost position={[56.6, -10.5, 1.7]} />
            <Curao catchCurao={handleCurao}/>
            <Curao2 catchCurao={handleCurao}/>
            <Curao3 catchCurao={handleCurao}/>
          </Physics>
        </Suspense>
        <WelcomeText />
        <Controls />
      </Canvas>
      <Loader>{"Cargando nivel"}</Loader>
      <CharacterHudLevel2
        vidas={vida}
        curao={curao}
      />
    </KeyboardControls>
    </>
  )
}
