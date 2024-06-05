import { useGLTF } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier";

export default function World(props) {

  const { nodes, materials } = useGLTF("/assets/models/world/ColiseoV4.glb");
  

  return (

    <group dispose={null}>
      <RigidBody type="fixed" position={[0, -5, -8]} >
            <mesh  rotation={[0, 0, 0]} >
                <boxGeometry args={[100, 1, 80]} />
                <meshStandardMaterial transparent={0} opacity={0} />
            </mesh>
        </RigidBody>
      <group>
        <group>
          <mesh geometry={nodes.Graderias_1.geometry} material={materials.PisoEscalerasAfuera} />
          <mesh geometry={nodes.Graderias_2.geometry} material={materials.EscalerasMat} />
          <mesh geometry={nodes.Graderias_3.geometry} material={materials.MuroBajo} />
          <mesh geometry={nodes.Graderias_4.geometry} material={materials.BarandasMat} />
          <mesh geometry={nodes.Graderias_5.geometry} material={materials.Escaleritas2} />
          <mesh geometry={nodes.Graderias_6.geometry} material={materials.LogoUV} />
        </group>
        <RigidBody type="fixed" colliders="cuboid">
        <group>
          <mesh geometry={nodes.Piso_1.geometry} material={materials.PisoLadrillos} />
          <mesh geometry={nodes.Piso_2.geometry} material={materials.TierraMat} />
        </group>
        </RigidBody>
        <mesh geometry={nodes.PisoColiseo.geometry} material={materials.Cancha} />
        <group>
          <mesh geometry={nodes.Tarima_1.geometry} material={materials.PisoEscalerasAfuera} />
          <mesh geometry={nodes.Tarima_2.geometry} material={nodes.Tarima_2.material} />
          <mesh geometry={nodes.Tarima_3.geometry} material={materials.PinturaNegra} />
          <mesh geometry={nodes.Tarima_4.geometry} material={materials.TarimaColiseo} />
          <mesh geometry={nodes.Tarima_5.geometry} material={materials.MuroAfuera} />
        </group>
        <group>
          <mesh geometry={nodes.Estructura_1.geometry} material={materials.PisoEscalerasAfuera} />
          <mesh geometry={nodes.Estructura_2.geometry} material={materials.PinturaNegra} />
          <mesh geometry={nodes.Estructura_3.geometry} material={materials.PinturaAmarilla} />
          <mesh geometry={nodes.Estructura_4.geometry} material={materials.TechoColiseo} />
        </group>
        <mesh geometry={nodes.Arcos.geometry} material={materials.ArcosMat} />
        <mesh geometry={nodes.BarandasEscaleras.geometry} material={materials.BarandasMat} />
        <mesh geometry={nodes.Columnas.geometry} material={materials.PisoEscalerasAfuera} />
        <mesh geometry={nodes.Cartel.geometry} material={materials.Carteles} />
        <mesh geometry={nodes.Columna.geometry} material={materials.Columna} />
        <group>
          <mesh geometry={nodes.Lampara.geometry} material={materials.Lampara} />
          <mesh geometry={nodes.Lampara_1.geometry} material={materials.Luz} />
        </group>
        <mesh geometry={nodes.PuertaAbierta.geometry} material={materials.Fence} />
        <mesh geometry={nodes.PuertaCerrada.geometry} material={materials.Fence} />
        <mesh geometry={nodes['1I'].geometry} material={materials['Material.006']} />
        <mesh geometry={nodes['2D'].geometry} material={materials['Material.006']} />
        <mesh geometry={nodes['3I'].geometry} material={materials['Material.006']} />
        <mesh geometry={nodes['4I'].geometry} material={materials['Material.006']} />
        <mesh geometry={nodes['5D'].geometry} material={materials['Material.006']} />
        <mesh geometry={nodes['6I'].geometry} material={materials['Material.006']} />
        <mesh geometry={nodes['7D'].geometry} material={materials['Material.006']} />
        <mesh geometry={nodes['8D'].geometry} material={materials['Material.006']} />
        <mesh geometry={nodes['9I'].geometry} material={materials['Material.006']} />
        <mesh geometry={nodes['1D'].geometry} material={materials['Material.006']} />
        <mesh geometry={nodes['2I'].geometry} material={materials['Material.006']} />
        <mesh geometry={nodes['3D'].geometry} material={materials['Material.006']} />
        <mesh geometry={nodes['4D'].geometry} material={materials['Material.006']} />
        <mesh geometry={nodes['5I'].geometry} material={materials['Material.006']} />
        <mesh geometry={nodes['6D'].geometry} material={materials['Material.006']} />
        <mesh geometry={nodes['7I'].geometry} material={materials['Material.006']} />
        <mesh geometry={nodes['8I'].geometry} material={materials['Material.006']} />
        <mesh geometry={nodes['9D'].geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Rieles.geometry} material={materials.MatRieles} />
        <group>
          <mesh geometry={nodes.Paredes.geometry} material={materials['PinturaBlanca.001']} />
          <mesh geometry={nodes.Paredes_1.geometry} material={materials.Ventanas} />
          <mesh geometry={nodes.Paredes_2.geometry} material={materials.PinturaNegra} />
        </group>
        <mesh geometry={nodes.Techo.geometry} material={materials.Techo} />
        <group>
          <mesh geometry={nodes.Columna_1.geometry} material={materials['PinturaBlanca.001']} />
          <mesh geometry={nodes.Columna_2.geometry} material={materials.PinturaNegra} />
        </group>
        <group>
          <mesh geometry={nodes.Paredes001.geometry} material={materials.PisoCDU} />
          <mesh geometry={nodes.Paredes001_1.geometry} material={materials.TierraMat} />
        </group>
        <group>
          <group>
            <mesh geometry={nodes.Discos1.geometry} material={materials.GrisO} />
            <mesh geometry={nodes.Discos1_1.geometry} material={materials.GrisC} />
            <mesh geometry={nodes.Discos1_2.geometry} material={materials.GrisM} />
          </group>
        </group>
        <group>
          <group>
            <mesh geometry={nodes.Discos2.geometry} material={materials.GrisO} />
            <mesh geometry={nodes.Discos2_1.geometry} material={materials.GrisC} />
            <mesh geometry={nodes.Discos2_2.geometry} material={materials.GrisM} />
          </group>
        </group>
        <mesh geometry={nodes.Banca4.geometry} material={materials.Banca} />
        <group>
          <mesh geometry={nodes.Piernas1001.geometry} material={materials.Abductores} />
        </group>
        <group>
          <mesh geometry={nodes.Barra1.geometry} material={materials.BarraO} />
        </group>
        <mesh geometry={nodes.Maquina1.geometry} material={materials.Squat} />
        <group>
          <mesh geometry={nodes.Bolas_1.geometry} material={materials.Bola1} />
          <mesh geometry={nodes.Bolas_2.geometry} material={materials.Bola2} />
        </group>
        <group>
          <mesh geometry={nodes.Trotadora001.geometry} material={materials.Trotadora} />
        </group>
        <group>
          <mesh geometry={nodes.Set2.geometry} material={materials.Discos1} />
        </group>
        <group>
          <mesh geometry={nodes.Colchonetas001.geometry} material={materials.Colchonetas} />
        </group>
        <group>
          <group>
            <group>
              <group>
                <mesh geometry={nodes.Declinado.geometry} material={materials.Bancas} />
              </group>
              <group>
                <mesh geometry={nodes.Inclinado.geometry} material={materials.Bancas} />
              </group>
              <group>
                <mesh geometry={nodes.Plano.geometry} material={materials.Bancas} />
              </group>
            </group>
          </group>
        </group>
        <group>
          <group>
            <group>
              <group>
                <mesh geometry={nodes.SetBarras.geometry} material={materials.Bancas} />
              </group>
            </group>
          </group>
        </group>
        <group>
          <group>
            <group>
              <group>
                <mesh geometry={nodes.Espalda002.geometry} material={materials.Bancas} />
              </group>
            </group>
          </group>
        </group>
        <group>
          <group>
            <group>
              <group>
                <mesh geometry={nodes.LegDeclinado.geometry} material={materials.Bancas} />
              </group>
            </group>
          </group>
        </group>
        <group>
          <group>
            <group>
              <group>
                <mesh geometry={nodes.Banca001.geometry} material={materials.Bancas} />
              </group>
            </group>
          </group>
        </group>
        <group>
          <mesh geometry={nodes.Eliptica_1.geometry} material={materials['black metal']} />
          <mesh geometry={nodes.Eliptica_2.geometry} material={materials['SCREEN BLACK']} />
          <mesh geometry={nodes.Eliptica_3.geometry} material={materials.titanium} />
          <mesh geometry={nodes.Eliptica_4.geometry} material={materials['black plastic']} />
          <mesh geometry={nodes.Eliptica_5.geometry} material={materials.SCREEN} />
          <mesh geometry={nodes.Eliptica_6.geometry} material={materials['WHITE PLASTIC']} />
          <mesh geometry={nodes.Eliptica_7.geometry} material={materials['HAND PLASTIC']} />
        </group>
        <group>
          <mesh geometry={nodes.Eliptica001_1.geometry} material={materials['black metal']} />
          <mesh geometry={nodes.Eliptica001_2.geometry} material={materials['SCREEN BLACK']} />
          <mesh geometry={nodes.Eliptica001_3.geometry} material={materials.titanium} />
          <mesh geometry={nodes.Eliptica001_4.geometry} material={materials['black plastic']} />
          <mesh geometry={nodes.Eliptica001_5.geometry} material={materials.SCREEN} />
          <mesh geometry={nodes.Eliptica001_6.geometry} material={materials['WHITE PLASTIC']} />
          <mesh geometry={nodes.Eliptica001_7.geometry} material={materials['HAND PLASTIC']} />
        </group>
        <group>
          <mesh geometry={nodes.Eliptica002_1.geometry} material={materials['black metal']} />
          <mesh geometry={nodes.Eliptica002_2.geometry} material={materials['SCREEN BLACK']} />
          <mesh geometry={nodes.Eliptica002_3.geometry} material={materials.titanium} />
          <mesh geometry={nodes.Eliptica002_4.geometry} material={materials['black plastic']} />
          <mesh geometry={nodes.Eliptica002_5.geometry} material={materials.SCREEN} />
          <mesh geometry={nodes.Eliptica002_6.geometry} material={materials['WHITE PLASTIC']} />
          <mesh geometry={nodes.Eliptica002_7.geometry} material={materials['HAND PLASTIC']} />
        </group>
        <mesh geometry={nodes.SquatMachine.geometry} material={materials['Squat.001']} />
        <mesh geometry={nodes.Barra3.geometry} material={materials['Squat.001']} />
        <mesh geometry={nodes.Barra4.geometry} material={materials['Squat.001']} />
        <mesh geometry={nodes.SquatMachine001.geometry} material={materials['Squat.001']} />
        <mesh geometry={nodes.Barra3001.geometry} material={materials['Squat.001']} />
        <mesh geometry={nodes.Barra4001.geometry} material={materials['Squat.001']} />
        <group>
          <mesh geometry={nodes.Extencion_1.geometry} material={materials._Rack} />
          <mesh geometry={nodes.Extencion_2.geometry} material={materials._Tros} />
          <mesh geometry={nodes.Extencion_3.geometry} material={materials._Plastic} />
          <mesh geometry={nodes.Extencion_4.geometry} material={materials._Chrome} />
          <mesh geometry={nodes.Extencion_5.geometry} material={materials._Steel} />
          <mesh geometry={nodes.Extencion_6.geometry} material={materials._Iron} />
          <mesh geometry={nodes.Extencion_7.geometry} material={materials._Pillows_Blk} />
          <mesh geometry={nodes.Extencion_8.geometry} material={materials._Pillows_Wht} />
          <mesh geometry={nodes.Extencion_9.geometry} material={materials._Informer} />
          <mesh geometry={nodes.Extencion_10.geometry} material={materials._Plastic_Red} />
        </group>
        <mesh geometry={nodes.Bicicleta.geometry} material={materials.Bicicleta} />
        <group>
          <group>
            <group />
          </group>
        </group>
        <mesh geometry={nodes.Bicicleta001.geometry} material={materials.Bicicleta} />
        <group>
          <mesh geometry={nodes.Trofeo_1.geometry} material={materials['oro.001']} />
          <mesh geometry={nodes.Trofeo_2.geometry} material={materials['base.001']} />
          <mesh geometry={nodes.Trofeo_3.geometry} material={materials['estrella.001']} />
        </group>
      </group>
    </group>

  )

}

useGLTF.preload("/assets/models/world/ColiseoV4.glb");