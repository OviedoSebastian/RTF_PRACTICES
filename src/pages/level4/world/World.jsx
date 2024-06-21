import { useGLTF, useTexture } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { RepeatWrapping } from "three";
import { color } from "three/examples/jsm/nodes/Nodes.js";

export default function World(props) {
  const { nodes, materials } = useGLTF(
    "/assets/models/world/Plazoleta.v28.glb"
  );

  return (
    <group {...props} dispose={null}>
      <group>
        <RigidBody type="fixed" colliders="trimesh">
        <group>
        <group>
          <mesh geometry={nodes.map_10osm_buildings009.geometry} material={materials['wall.004']} />
          <mesh
            geometry={nodes.map_10osm_buildings009_1.geometry}
            material={materials.mat_window_panes}
          />
          <mesh
            geometry={nodes.map_10osm_buildings009_2.geometry}
            material={materials.mat_window_louvers}
          />
          <mesh
            geometry={nodes.map_10osm_buildings009_3.geometry}
            material={materials['wall.002']}
          />
          <mesh
            geometry={nodes.map_10osm_buildings009_4.geometry}
            material={materials['mat_railing_posts.Salones']}
          />
          <mesh
            geometry={nodes.map_10osm_buildings009_5.geometry}
            material={materials.mat_railing_rails}
          />
          <mesh geometry={nodes.map_10osm_buildings009_6.geometry} material={materials.Glass} />
          <mesh geometry={nodes.map_10osm_buildings009_7.geometry} material={materials.negro} />
        </group>
        <group>
          <mesh geometry={nodes.map_8osm_buildings019.geometry} material={materials.floor} />
          <mesh
            geometry={nodes.map_8osm_buildings019_1.geometry}
            material={materials['wall.002']}
          />
          <mesh geometry={nodes.map_8osm_buildings019_2.geometry} material={materials.mat_stairs} />
          <mesh
            geometry={nodes.map_8osm_buildings019_3.geometry}
            material={materials.mat_railing_posts}
          />
          <mesh geometry={nodes.map_8osm_buildings019_4.geometry} material={materials.Glass} />
          <mesh
            geometry={nodes.map_8osm_buildings019_5.geometry}
            material={materials['mat_railing_rails.Auditorios.001']}
          />
          <mesh geometry={nodes.map_8osm_buildings019_6.geometry} material={materials.negro} />
        </group>
        <mesh geometry={nodes.Escalera.geometry} material={materials.escalerasPlaza} />
        <group>
          <mesh geometry={nodes.maposm_buildings002.geometry} material={materials['wall.003']} />
          <mesh geometry={nodes.maposm_buildings002_1.geometry} material={materials.Glass} />
          <mesh geometry={nodes.maposm_buildings002_2.geometry} material={materials.marcoVentana} />
          <mesh
            geometry={nodes.maposm_buildings002_3.geometry}
            material={materials.rejillaVentana}
          />
          <mesh
            geometry={nodes.maposm_buildings002_4.geometry}
            material={materials['mat_railing_posts.Edificio']}
          />
          <mesh
            geometry={nodes.maposm_buildings002_5.geometry}
            material={materials['mat_railing_rails.Edificio']}
          />
          <mesh
            geometry={nodes.maposm_buildings002_6.geometry}
            material={materials.mat_railing_walls}
          />
          <mesh geometry={nodes.maposm_buildings002_7.geometry} material={materials.negro} />
        </group>
        <group>
          <mesh geometry={nodes.building_025_mesh.geometry} material={materials.mat_walls} />
          <mesh geometry={nodes.building_025_mesh_1.geometry} material={materials.mat_columns} />
          <mesh geometry={nodes.building_025_mesh_2.geometry} material={materials.Material} />
        </group>
        <mesh geometry={nodes.CentroPlaza.geometry} material={materials.escalerasPlaza} />
        <mesh geometry={nodes.univalle_logo.geometry} material={materials['univalle logo']} />
        <mesh geometry={nodes.camino1.geometry} material={materials.Cesped} />
        <mesh geometry={nodes.TechoAudi.geometry} material={materials.roof} />
        <mesh geometry={nodes.TechoSalon.geometry} material={materials.roof} />
        <mesh geometry={nodes.TechoEdificio.geometry} material={materials.roof} />
        <mesh geometry={nodes.TechoCR.geometry} material={materials['Material.001']} />
        <group>
          <mesh geometry={nodes.Piso_1.geometry} material={materials.Piso} />
          <mesh geometry={nodes.Piso_2.geometry} material={materials.Tierra} />
        </group>
        <group>
          <mesh geometry={nodes.building_040_mesh.geometry} material={materials.edificio6} />
          <mesh geometry={nodes.building_040_mesh_1.geometry} material={materials.Glass} />
          <mesh geometry={nodes.building_040_mesh_2.geometry} material={materials.techoE} />
          <mesh geometry={nodes.building_040_mesh_3.geometry} material={materials.rendijasE} />
          <mesh geometry={nodes.building_040_mesh_4.geometry} material={materials.louvresE} />
          <mesh geometry={nodes.building_040_mesh_5.geometry} material={materials.puertaE} />
          <mesh geometry={nodes.building_040_mesh_6.geometry} material={materials.gris} />
          <mesh geometry={nodes.building_040_mesh_7.geometry} material={materials.negro} />
        </group>
        <group>
          <mesh geometry={nodes.building_041_mesh.geometry} material={materials.Glass} />
          <mesh geometry={nodes.building_041_mesh_1.geometry} material={materials.puertaE} />
          <mesh geometry={nodes.building_041_mesh_2.geometry} material={materials.techoE} />
          <mesh geometry={nodes.building_041_mesh_3.geometry} material={materials.negro} />
          <mesh geometry={nodes.building_041_mesh_4.geometry} material={materials.edificio5} />
        </group>
        <group>
          <mesh geometry={nodes.building_043_mesh.geometry} material={materials.wallsEdificio3} />
          <mesh geometry={nodes.building_043_mesh_1.geometry} material={materials.negro} />
          <mesh geometry={nodes.building_043_mesh_2.geometry} material={materials.gris} />
          <mesh geometry={nodes.building_043_mesh_3.geometry} material={materials.rendijasE} />
          <mesh geometry={nodes.building_043_mesh_4.geometry} material={materials.Glass} />
          <mesh geometry={nodes.building_043_mesh_5.geometry} material={materials.techoE} />
          <mesh geometry={nodes.building_043_mesh_6.geometry} material={materials.puertaE} />
          <mesh geometry={nodes.building_043_mesh_7.geometry} material={materials.louvresE} />
        </group>
        <group>
          <mesh geometry={nodes.building_044_mesh.geometry} material={materials.Glass} />
          <mesh geometry={nodes.building_044_mesh_1.geometry} material={materials.edificio2} />
          <mesh geometry={nodes.building_044_mesh_2.geometry} material={materials.negro} />
          <mesh geometry={nodes.building_044_mesh_3.geometry} material={materials.techoE} />
          <mesh geometry={nodes.building_044_mesh_4.geometry} material={materials.gris} />
        </group>
        <group>
          <mesh geometry={nodes.building_045_mesh.geometry} material={materials['Material.005']} />
          <mesh geometry={nodes.building_045_mesh_1.geometry} material={materials.Glass} />
          <mesh geometry={nodes.building_045_mesh_2.geometry} material={materials.puertaE} />
          <mesh geometry={nodes.building_045_mesh_3.geometry} material={materials.techoE} />
          <mesh geometry={nodes.building_045_mesh_4.geometry} material={materials.rendijasE} />
          <mesh geometry={nodes.building_045_mesh_5.geometry} material={materials.louvresE} />
          <mesh geometry={nodes.building_045_mesh_6.geometry} material={materials.negro} />
        </group>
        <group>
          <mesh geometry={nodes.building_042_mesh001.geometry} material={materials['wall.010']} />
          <mesh geometry={nodes.building_042_mesh001_1.geometry} material={materials.Glass} />
          <mesh geometry={nodes.building_042_mesh001_2.geometry} material={materials.techoE} />
          <mesh geometry={nodes.building_042_mesh001_3.geometry} material={materials.puertaE} />
          <mesh geometry={nodes.building_042_mesh001_4.geometry} material={materials.rendijasE} />
          <mesh geometry={nodes.building_042_mesh001_5.geometry} material={materials.negro} />
        </group>
        <group>
          <mesh geometry={nodes.building_040_mesh002.geometry} material={materials.edificio6} />
          <mesh geometry={nodes.building_040_mesh002_1.geometry} material={materials.Glass} />
          <mesh geometry={nodes.building_040_mesh002_2.geometry} material={materials.techoE} />
          <mesh geometry={nodes.building_040_mesh002_3.geometry} material={materials.rendijasE} />
          <mesh geometry={nodes.building_040_mesh002_4.geometry} material={materials.louvresE} />
          <mesh geometry={nodes.building_040_mesh002_5.geometry} material={materials.puertaE} />
          <mesh geometry={nodes.building_040_mesh002_6.geometry} material={materials.gris} />
          <mesh geometry={nodes.building_040_mesh002_7.geometry} material={materials.negro} />
          <mesh geometry={nodes.building_040_mesh002_8.geometry} material={materials.edificio6v2} />
        </group>
        <group>
          <mesh geometry={nodes.building_041_mesh002.geometry} material={materials.Glass} />
          <mesh geometry={nodes.building_041_mesh002_1.geometry} material={materials.puertaE} />
          <mesh geometry={nodes.building_041_mesh002_2.geometry} material={materials.techoE} />
          <mesh geometry={nodes.building_041_mesh002_3.geometry} material={materials.negro} />
          <mesh geometry={nodes.building_041_mesh002_4.geometry} material={materials.edificio5v2} />
        </group>
        <group>
          <mesh
            geometry={nodes.building_043_mesh002.geometry}
            material={materials.wallsEdificio3}
          />
          <mesh geometry={nodes.building_043_mesh002_1.geometry} material={materials.negro} />
          <mesh geometry={nodes.building_043_mesh002_2.geometry} material={materials.gris} />
          <mesh geometry={nodes.building_043_mesh002_3.geometry} material={materials.rendijasE} />
          <mesh geometry={nodes.building_043_mesh002_4.geometry} material={materials.Glass} />
          <mesh geometry={nodes.building_043_mesh002_5.geometry} material={materials.techoE} />
          <mesh geometry={nodes.building_043_mesh002_6.geometry} material={materials.puertaE} />
          <mesh geometry={nodes.building_043_mesh002_7.geometry} material={materials.louvresE} />
          <mesh geometry={nodes.building_043_mesh002_8.geometry} material={materials.edificio3v2} />
        </group>
        <group>
          <mesh geometry={nodes.building_044_mesh002.geometry} material={materials.Glass} />
          <mesh geometry={nodes.building_044_mesh002_1.geometry} material={materials.negro} />
          <mesh geometry={nodes.building_044_mesh002_2.geometry} material={materials.techoE} />
          <mesh geometry={nodes.building_044_mesh002_3.geometry} material={materials.gris} />
          <mesh geometry={nodes.building_044_mesh002_4.geometry} material={materials.edificio2v2} />
        </group>
        <group>
          <mesh geometry={nodes.building_045_mesh002.geometry} material={materials.Glass} />
          <mesh geometry={nodes.building_045_mesh002_1.geometry} material={materials.puertaE} />
          <mesh geometry={nodes.building_045_mesh002_2.geometry} material={materials.techoE} />
          <mesh geometry={nodes.building_045_mesh002_3.geometry} material={materials.rendijasE} />
          <mesh geometry={nodes.building_045_mesh002_4.geometry} material={materials.louvresE} />
          <mesh geometry={nodes.building_045_mesh002_5.geometry} material={materials.negro} />
          <mesh
            geometry={nodes.building_045_mesh002_6.geometry}
            material={materials['Material.003']}
          />
        </group>
        <group>
          <mesh geometry={nodes.building_042_mesh002.geometry} material={materials['wall.010']} />
          <mesh geometry={nodes.building_042_mesh002_1.geometry} material={materials.Glass} />
          <mesh geometry={nodes.building_042_mesh002_2.geometry} material={materials.techoE} />
          <mesh geometry={nodes.building_042_mesh002_3.geometry} material={materials.puertaE} />
          <mesh geometry={nodes.building_042_mesh002_4.geometry} material={materials.rendijasE} />
          <mesh geometry={nodes.building_042_mesh002_5.geometry} material={materials.negro} />
          <mesh geometry={nodes.building_042_mesh002_6.geometry} material={materials.edificio4v2} />
        </group>
        <group>
          <mesh geometry={nodes.building_040_mesh003.geometry} material={materials.edificio6} />
          <mesh geometry={nodes.building_040_mesh003_1.geometry} material={materials.Glass} />
          <mesh geometry={nodes.building_040_mesh003_2.geometry} material={materials.techoE} />
          <mesh geometry={nodes.building_040_mesh003_3.geometry} material={materials.rendijasE} />
          <mesh geometry={nodes.building_040_mesh003_4.geometry} material={materials.louvresE} />
          <mesh geometry={nodes.building_040_mesh003_5.geometry} material={materials.puertaE} />
          <mesh geometry={nodes.building_040_mesh003_6.geometry} material={materials.gris} />
          <mesh geometry={nodes.building_040_mesh003_7.geometry} material={materials.negro} />
        </group>
        <group>
          <mesh geometry={nodes.building_041_mesh003.geometry} material={materials.Glass} />
          <mesh geometry={nodes.building_041_mesh003_1.geometry} material={materials.puertaE} />
          <mesh geometry={nodes.building_041_mesh003_2.geometry} material={materials.techoE} />
          <mesh geometry={nodes.building_041_mesh003_3.geometry} material={materials.negro} />
          <mesh geometry={nodes.building_041_mesh003_4.geometry} material={materials.edificio5} />
        </group>
        <group>
          <mesh
            geometry={nodes.building_043_mesh003.geometry}
            material={materials.wallsEdificio3}
          />
          <mesh geometry={nodes.building_043_mesh003_1.geometry} material={materials.negro} />
          <mesh geometry={nodes.building_043_mesh003_2.geometry} material={materials.gris} />
          <mesh geometry={nodes.building_043_mesh003_3.geometry} material={materials.rendijasE} />
          <mesh geometry={nodes.building_043_mesh003_4.geometry} material={materials.Glass} />
          <mesh geometry={nodes.building_043_mesh003_5.geometry} material={materials.techoE} />
          <mesh geometry={nodes.building_043_mesh003_6.geometry} material={materials.puertaE} />
          <mesh geometry={nodes.building_043_mesh003_7.geometry} material={materials.louvresE} />
        </group>
        <group>
          <mesh geometry={nodes.building_044_mesh003.geometry} material={materials.Glass} />
          <mesh geometry={nodes.building_044_mesh003_1.geometry} material={materials.edificio2} />
          <mesh geometry={nodes.building_044_mesh003_2.geometry} material={materials.negro} />
          <mesh geometry={nodes.building_044_mesh003_3.geometry} material={materials.techoE} />
          <mesh geometry={nodes.building_044_mesh003_4.geometry} material={materials.gris} />
        </group>
        <group>
          <mesh
            geometry={nodes.building_045_mesh003.geometry}
            material={materials['Material.005']}
          />
          <mesh geometry={nodes.building_045_mesh003_1.geometry} material={materials.Glass} />
          <mesh geometry={nodes.building_045_mesh003_2.geometry} material={materials.puertaE} />
          <mesh geometry={nodes.building_045_mesh003_3.geometry} material={materials.techoE} />
          <mesh geometry={nodes.building_045_mesh003_4.geometry} material={materials.rendijasE} />
          <mesh geometry={nodes.building_045_mesh003_5.geometry} material={materials.louvresE} />
          <mesh geometry={nodes.building_045_mesh003_6.geometry} material={materials.negro} />
        </group>
        <group>
          <mesh geometry={nodes.building_042_mesh003.geometry} material={materials['wall.010']} />
          <mesh geometry={nodes.building_042_mesh003_1.geometry} material={materials.Glass} />
          <mesh geometry={nodes.building_042_mesh003_2.geometry} material={materials.techoE} />
          <mesh geometry={nodes.building_042_mesh003_3.geometry} material={materials.puertaE} />
          <mesh geometry={nodes.building_042_mesh003_4.geometry} material={materials.rendijasE} />
          <mesh geometry={nodes.building_042_mesh003_5.geometry} material={materials.negro} />
        </group>
        <group>
          <mesh geometry={nodes.building_040_mesh004.geometry} material={materials.edificio6} />
          <mesh geometry={nodes.building_040_mesh004_1.geometry} material={materials.Glass} />
          <mesh geometry={nodes.building_040_mesh004_2.geometry} material={materials.techoE} />
          <mesh geometry={nodes.building_040_mesh004_3.geometry} material={materials.rendijasE} />
          <mesh geometry={nodes.building_040_mesh004_4.geometry} material={materials.louvresE} />
          <mesh geometry={nodes.building_040_mesh004_5.geometry} material={materials.puertaE} />
          <mesh geometry={nodes.building_040_mesh004_6.geometry} material={materials.gris} />
          <mesh geometry={nodes.building_040_mesh004_7.geometry} material={materials.negro} />
          <mesh geometry={nodes.building_040_mesh004_8.geometry} material={materials.edificio6v2} />
        </group>
        <group>
          <mesh geometry={nodes.building_041_mesh004.geometry} material={materials.Glass} />
          <mesh geometry={nodes.building_041_mesh004_1.geometry} material={materials.puertaE} />
          <mesh geometry={nodes.building_041_mesh004_2.geometry} material={materials.techoE} />
          <mesh geometry={nodes.building_041_mesh004_3.geometry} material={materials.negro} />
          <mesh geometry={nodes.building_041_mesh004_4.geometry} material={materials.edificio5v2} />
        </group>
        <group>
          <mesh
            geometry={nodes.building_043_mesh004.geometry}
            material={materials.wallsEdificio3}
          />
          <mesh geometry={nodes.building_043_mesh004_1.geometry} material={materials.negro} />
          <mesh geometry={nodes.building_043_mesh004_2.geometry} material={materials.gris} />
          <mesh geometry={nodes.building_043_mesh004_3.geometry} material={materials.rendijasE} />
          <mesh geometry={nodes.building_043_mesh004_4.geometry} material={materials.Glass} />
          <mesh geometry={nodes.building_043_mesh004_5.geometry} material={materials.techoE} />
          <mesh geometry={nodes.building_043_mesh004_6.geometry} material={materials.puertaE} />
          <mesh geometry={nodes.building_043_mesh004_7.geometry} material={materials.louvresE} />
          <mesh geometry={nodes.building_043_mesh004_8.geometry} material={materials.edificio3v2} />
        </group>
        <group>
          <mesh geometry={nodes.building_044_mesh004.geometry} material={materials.Glass} />
          <mesh geometry={nodes.building_044_mesh004_1.geometry} material={materials.negro} />
          <mesh geometry={nodes.building_044_mesh004_2.geometry} material={materials.techoE} />
          <mesh geometry={nodes.building_044_mesh004_3.geometry} material={materials.gris} />
          <mesh geometry={nodes.building_044_mesh004_4.geometry} material={materials.edificio2v2} />
        </group>
        <group>
          <mesh geometry={nodes.building_045_mesh004.geometry} material={materials.Glass} />
          <mesh geometry={nodes.building_045_mesh004_1.geometry} material={materials.puertaE} />
          <mesh geometry={nodes.building_045_mesh004_2.geometry} material={materials.techoE} />
          <mesh geometry={nodes.building_045_mesh004_3.geometry} material={materials.rendijasE} />
          <mesh geometry={nodes.building_045_mesh004_4.geometry} material={materials.louvresE} />
          <mesh geometry={nodes.building_045_mesh004_5.geometry} material={materials.negro} />
          <mesh
            geometry={nodes.building_045_mesh004_6.geometry}
            material={materials['Material.003']}
          />
        </group>
        <group>
          <mesh geometry={nodes.building_042_mesh004.geometry} material={materials['wall.010']} />
          <mesh geometry={nodes.building_042_mesh004_1.geometry} material={materials.Glass} />
          <mesh geometry={nodes.building_042_mesh004_2.geometry} material={materials.techoE} />
          <mesh geometry={nodes.building_042_mesh004_3.geometry} material={materials.puertaE} />
          <mesh geometry={nodes.building_042_mesh004_4.geometry} material={materials.rendijasE} />
          <mesh geometry={nodes.building_042_mesh004_5.geometry} material={materials.negro} />
          <mesh geometry={nodes.building_042_mesh004_6.geometry} material={materials.edificio4v2} />
        </group>
        <group>
          <mesh geometry={nodes.building_040_mesh005.geometry} material={materials.edificio6} />
          <mesh geometry={nodes.building_040_mesh005_1.geometry} material={materials.Glass} />
          <mesh geometry={nodes.building_040_mesh005_2.geometry} material={materials.techoE} />
          <mesh geometry={nodes.building_040_mesh005_3.geometry} material={materials.rendijasE} />
          <mesh geometry={nodes.building_040_mesh005_4.geometry} material={materials.louvresE} />
          <mesh geometry={nodes.building_040_mesh005_5.geometry} material={materials.puertaE} />
          <mesh geometry={nodes.building_040_mesh005_6.geometry} material={materials.gris} />
          <mesh geometry={nodes.building_040_mesh005_7.geometry} material={materials.negro} />
        </group>
        <group>
          <mesh geometry={nodes.building_041_mesh005.geometry} material={materials.Glass} />
          <mesh geometry={nodes.building_041_mesh005_1.geometry} material={materials.puertaE} />
          <mesh geometry={nodes.building_041_mesh005_2.geometry} material={materials.techoE} />
          <mesh geometry={nodes.building_041_mesh005_3.geometry} material={materials.negro} />
          <mesh geometry={nodes.building_041_mesh005_4.geometry} material={materials.edificio5} />
        </group>
        <group>
          <mesh
            geometry={nodes.building_043_mesh005.geometry}
            material={materials.wallsEdificio3}
          />
          <mesh geometry={nodes.building_043_mesh005_1.geometry} material={materials.negro} />
          <mesh geometry={nodes.building_043_mesh005_2.geometry} material={materials.gris} />
          <mesh geometry={nodes.building_043_mesh005_3.geometry} material={materials.rendijasE} />
          <mesh geometry={nodes.building_043_mesh005_4.geometry} material={materials.Glass} />
          <mesh geometry={nodes.building_043_mesh005_5.geometry} material={materials.techoE} />
          <mesh geometry={nodes.building_043_mesh005_6.geometry} material={materials.puertaE} />
          <mesh geometry={nodes.building_043_mesh005_7.geometry} material={materials.louvresE} />
        </group>
        <group>
          <mesh geometry={nodes.building_044_mesh005.geometry} material={materials.Glass} />
          <mesh geometry={nodes.building_044_mesh005_1.geometry} material={materials.edificio2} />
          <mesh geometry={nodes.building_044_mesh005_2.geometry} material={materials.negro} />
          <mesh geometry={nodes.building_044_mesh005_3.geometry} material={materials.techoE} />
          <mesh geometry={nodes.building_044_mesh005_4.geometry} material={materials.gris} />
        </group>
        <group>
          <mesh
            geometry={nodes.building_045_mesh005.geometry}
            material={materials['Material.005']}
          />
          <mesh geometry={nodes.building_045_mesh005_1.geometry} material={materials.Glass} />
          <mesh geometry={nodes.building_045_mesh005_2.geometry} material={materials.puertaE} />
          <mesh geometry={nodes.building_045_mesh005_3.geometry} material={materials.techoE} />
          <mesh geometry={nodes.building_045_mesh005_4.geometry} material={materials.rendijasE} />
          <mesh geometry={nodes.building_045_mesh005_5.geometry} material={materials.louvresE} />
          <mesh geometry={nodes.building_045_mesh005_6.geometry} material={materials.negro} />
        </group>
        <group>
          <mesh geometry={nodes.building_042_mesh005.geometry} material={materials['wall.010']} />
          <mesh geometry={nodes.building_042_mesh005_1.geometry} material={materials.Glass} />
          <mesh geometry={nodes.building_042_mesh005_2.geometry} material={materials.techoE} />
          <mesh geometry={nodes.building_042_mesh005_3.geometry} material={materials.puertaE} />
          <mesh geometry={nodes.building_042_mesh005_4.geometry} material={materials.rendijasE} />
          <mesh geometry={nodes.building_042_mesh005_5.geometry} material={materials.negro} />
        </group>
        <group>
          <mesh
            geometry={nodes.building_043_mesh006.geometry}
            material={materials.wallsEdificio3}
          />
          <mesh geometry={nodes.building_043_mesh006_1.geometry} material={materials.negro} />
          <mesh geometry={nodes.building_043_mesh006_2.geometry} material={materials.gris} />
          <mesh geometry={nodes.building_043_mesh006_3.geometry} material={materials.rendijasE} />
          <mesh geometry={nodes.building_043_mesh006_4.geometry} material={materials.Glass} />
          <mesh geometry={nodes.building_043_mesh006_5.geometry} material={materials.techoE} />
          <mesh geometry={nodes.building_043_mesh006_6.geometry} material={materials.puertaE} />
          <mesh geometry={nodes.building_043_mesh006_7.geometry} material={materials.louvresE} />
          <mesh geometry={nodes.building_043_mesh006_8.geometry} material={materials.edificio3v2} />
        </group>
        <group>
          <mesh geometry={nodes.building_044_mesh006.geometry} material={materials.Glass} />
          <mesh geometry={nodes.building_044_mesh006_1.geometry} material={materials.negro} />
          <mesh geometry={nodes.building_044_mesh006_2.geometry} material={materials.techoE} />
          <mesh geometry={nodes.building_044_mesh006_3.geometry} material={materials.gris} />
          <mesh geometry={nodes.building_044_mesh006_4.geometry} material={materials.edificio2v2} />
        </group>
        <group>
          <mesh geometry={nodes.building_045_mesh006.geometry} material={materials.Glass} />
          <mesh geometry={nodes.building_045_mesh006_1.geometry} material={materials.puertaE} />
          <mesh geometry={nodes.building_045_mesh006_2.geometry} material={materials.techoE} />
          <mesh geometry={nodes.building_045_mesh006_3.geometry} material={materials.rendijasE} />
          <mesh geometry={nodes.building_045_mesh006_4.geometry} material={materials.louvresE} />
          <mesh geometry={nodes.building_045_mesh006_5.geometry} material={materials.negro} />
          <mesh
            geometry={nodes.building_045_mesh006_6.geometry}
            material={materials['Material.003']}
          />
        </group>
        <group>
          <mesh geometry={nodes.building_040_mesh007.geometry} material={materials.edificio6} />
          <mesh geometry={nodes.building_040_mesh007_1.geometry} material={materials.Glass} />
          <mesh geometry={nodes.building_040_mesh007_2.geometry} material={materials.techoE} />
          <mesh geometry={nodes.building_040_mesh007_3.geometry} material={materials.rendijasE} />
          <mesh geometry={nodes.building_040_mesh007_4.geometry} material={materials.louvresE} />
          <mesh geometry={nodes.building_040_mesh007_5.geometry} material={materials.puertaE} />
          <mesh geometry={nodes.building_040_mesh007_6.geometry} material={materials.gris} />
          <mesh geometry={nodes.building_040_mesh007_7.geometry} material={materials.negro} />
        </group>
        <group>
          <mesh geometry={nodes.building_041_mesh007.geometry} material={materials.Glass} />
          <mesh geometry={nodes.building_041_mesh007_1.geometry} material={materials.puertaE} />
          <mesh geometry={nodes.building_041_mesh007_2.geometry} material={materials.techoE} />
          <mesh geometry={nodes.building_041_mesh007_3.geometry} material={materials.negro} />
          <mesh geometry={nodes.building_041_mesh007_4.geometry} material={materials.edificio5} />
        </group>
        <group>
          <mesh geometry={nodes.building_043_mesh007.geometry} material={materials.negro} />
          <mesh geometry={nodes.building_043_mesh007_1.geometry} material={materials.gris} />
          <mesh geometry={nodes.building_043_mesh007_2.geometry} material={materials.rendijasE} />
          <mesh geometry={nodes.building_043_mesh007_3.geometry} material={materials.Glass} />
          <mesh geometry={nodes.building_043_mesh007_4.geometry} material={materials.techoE} />
          <mesh geometry={nodes.building_043_mesh007_5.geometry} material={materials.puertaE} />
          <mesh
            geometry={nodes.building_043_mesh007_6.geometry}
            material={materials['BricksReclaimedWhitewashedOffset001_2K.001']}
          />
          <mesh
            geometry={nodes.building_043_mesh007_7.geometry}
            material={materials.BricksReclaimedWhitewashedOffset001_2K}
          />
        </group>
        <group>
          <mesh geometry={nodes.building_042_mesh007.geometry} material={materials['wall.010']} />
          <mesh geometry={nodes.building_042_mesh007_1.geometry} material={materials.Glass} />
          <mesh geometry={nodes.building_042_mesh007_2.geometry} material={materials.techoE} />
          <mesh geometry={nodes.building_042_mesh007_3.geometry} material={materials.puertaE} />
          <mesh geometry={nodes.building_042_mesh007_4.geometry} material={materials.rendijasE} />
          <mesh geometry={nodes.building_042_mesh007_5.geometry} material={materials.negro} />
        </group>
        <group>
          <mesh geometry={nodes.building_040_mesh008.geometry} material={materials.edificio6} />
          <mesh geometry={nodes.building_040_mesh008_1.geometry} material={materials.Glass} />
          <mesh geometry={nodes.building_040_mesh008_2.geometry} material={materials.techoE} />
          <mesh geometry={nodes.building_040_mesh008_3.geometry} material={materials.rendijasE} />
          <mesh geometry={nodes.building_040_mesh008_4.geometry} material={materials.louvresE} />
          <mesh geometry={nodes.building_040_mesh008_5.geometry} material={materials.puertaE} />
          <mesh geometry={nodes.building_040_mesh008_6.geometry} material={materials.gris} />
          <mesh geometry={nodes.building_040_mesh008_7.geometry} material={materials.negro} />
          <mesh geometry={nodes.building_040_mesh008_8.geometry} material={materials.edificio6v2} />
        </group>
        <group>
          <mesh geometry={nodes.building_041_mesh008.geometry} material={materials.Glass} />
          <mesh geometry={nodes.building_041_mesh008_1.geometry} material={materials.puertaE} />
          <mesh geometry={nodes.building_041_mesh008_2.geometry} material={materials.techoE} />
          <mesh geometry={nodes.building_041_mesh008_3.geometry} material={materials.negro} />
          <mesh geometry={nodes.building_041_mesh008_4.geometry} material={materials.edificio5v2} />
        </group>
        <group>
          <mesh
            geometry={nodes.building_043_mesh008.geometry}
            material={materials.wallsEdificio3}
          />
          <mesh geometry={nodes.building_043_mesh008_1.geometry} material={materials.negro} />
          <mesh geometry={nodes.building_043_mesh008_2.geometry} material={materials.gris} />
          <mesh geometry={nodes.building_043_mesh008_3.geometry} material={materials.rendijasE} />
          <mesh geometry={nodes.building_043_mesh008_4.geometry} material={materials.Glass} />
          <mesh geometry={nodes.building_043_mesh008_5.geometry} material={materials.techoE} />
          <mesh geometry={nodes.building_043_mesh008_6.geometry} material={materials.puertaE} />
          <mesh geometry={nodes.building_043_mesh008_7.geometry} material={materials.louvresE} />
          <mesh geometry={nodes.building_043_mesh008_8.geometry} material={materials.edificio3v2} />
        </group>
        <group>
          <mesh geometry={nodes.building_044_mesh008.geometry} material={materials.Glass} />
          <mesh geometry={nodes.building_044_mesh008_1.geometry} material={materials.negro} />
          <mesh geometry={nodes.building_044_mesh008_2.geometry} material={materials.techoE} />
          <mesh geometry={nodes.building_044_mesh008_3.geometry} material={materials.gris} />
          <mesh geometry={nodes.building_044_mesh008_4.geometry} material={materials.edificio2v2} />
        </group>
        <group>
          <mesh geometry={nodes.building_045_mesh008.geometry} material={materials.Glass} />
          <mesh geometry={nodes.building_045_mesh008_1.geometry} material={materials.puertaE} />
          <mesh geometry={nodes.building_045_mesh008_2.geometry} material={materials.techoE} />
          <mesh geometry={nodes.building_045_mesh008_3.geometry} material={materials.rendijasE} />
          <mesh geometry={nodes.building_045_mesh008_4.geometry} material={materials.louvresE} />
          <mesh geometry={nodes.building_045_mesh008_5.geometry} material={materials.negro} />
          <mesh
            geometry={nodes.building_045_mesh008_6.geometry}
            material={materials['Material.003']}
          />
        </group>
        <group>
          <mesh geometry={nodes.building_042_mesh008.geometry} material={materials['wall.010']} />
          <mesh geometry={nodes.building_042_mesh008_1.geometry} material={materials.Glass} />
          <mesh geometry={nodes.building_042_mesh008_2.geometry} material={materials.techoE} />
          <mesh geometry={nodes.building_042_mesh008_3.geometry} material={materials.puertaE} />
          <mesh geometry={nodes.building_042_mesh008_4.geometry} material={materials.rendijasE} />
          <mesh geometry={nodes.building_042_mesh008_5.geometry} material={materials.negro} />
          <mesh geometry={nodes.building_042_mesh008_6.geometry} material={materials.edificio4v2} />
        </group>
        <group>
          <mesh geometry={nodes.Mesh001.geometry} material={materials.hojas} />
          <mesh geometry={nodes.Mesh001_1.geometry} material={materials.tronco} />
        </group>
        <group>
          <mesh geometry={nodes.Cube030.geometry} material={materials['tronco.001']} />
          <mesh geometry={nodes.Cube030_1.geometry} material={materials.hojas1} />
          <mesh geometry={nodes.Cube030_2.geometry} material={materials.hojas2} />
        </group>
        <group>
          <mesh geometry={nodes.Mesh002.geometry} material={materials.hojas} />
          <mesh geometry={nodes.Mesh002_1.geometry} material={materials.tronco} />
        </group>
        <group>
          <mesh geometry={nodes.Cylinder005.geometry} material={materials.herbes} />
          <mesh geometry={nodes.Cylinder005_1.geometry} material={materials['roso feauille']} />
        </group>
        <mesh geometry={nodes.cesped2.geometry} material={materials['Material.007']} />
        <group>
          <mesh geometry={nodes.Cylinder001.geometry} material={materials['champi gris']} />
          <mesh geometry={nodes.Cylinder001_1.geometry} material={materials['champi marron ']} />
          <mesh geometry={nodes.Cylinder001_2.geometry} material={materials['champi blanco']} />
          <mesh geometry={nodes.Cylinder001_3.geometry} material={materials['champi rojo']} />
          <mesh geometry={nodes.Cylinder001_4.geometry} material={materials['champi cafe']} />
        </group>
        <group>
          <mesh geometry={nodes.fence004.geometry} material={materials.fence4} />
          <mesh geometry={nodes.fence004_1.geometry} material={materials.fence3} />
          <mesh geometry={nodes.fence004_2.geometry} material={materials.fence2} />
          <mesh geometry={nodes.fence004_3.geometry} material={materials.fence1} />
        </group>

        <group />
        <group>
          <mesh geometry={nodes.TunelRedondo.geometry} material={materials.TunelRedondo} />
        </group>
        <mesh geometry={nodes.Tunel.geometry} material={materials['Tunel.001']} />
        <mesh geometry={nodes.Tunel001.geometry} material={materials['Tunel.001']} />
        <mesh geometry={nodes.Tunel002.geometry} material={materials['Tunel.001']} />
        <mesh geometry={nodes.Tunel003.geometry} material={materials['Tunel.001']} />
        <mesh geometry={nodes.Tunel004.geometry} material={materials['Tunel.001']} />
        <group>
          <mesh geometry={nodes.Object_4.geometry} material={materials.Columnas} />
          <mesh geometry={nodes.Object_4_1.geometry} material={materials.Puerta} />
          <mesh geometry={nodes.Object_4_2.geometry} material={materials.Paredes} />
          <mesh geometry={nodes.Object_4_3.geometry} material={materials.Manija} />
          <mesh geometry={nodes.Object_4_4.geometry} material={materials.modulos_v3FlagSG} />
          <mesh geometry={nodes.Object_4_5.geometry} material={materials.modulos_v4BarrelSG} />
          <mesh geometry={nodes.Object_4_6.geometry} material={materials['Puerta.001']} />
        </group>
        <mesh geometry={nodes.Tunel005.geometry} material={materials['Tunel.002']} />
        <mesh geometry={nodes.TechoLaberinto1.geometry} material={materials.Columnas} />
        <group>
          <mesh geometry={nodes.Escalera1_1.geometry} material={materials.ObstaculoEscaleras1} />
          <mesh geometry={nodes.Escalera1_2.geometry} material={materials.ObstaculoEscaleras2} />
        </group>

        <group>
        <mesh geometry={nodes.Antorchas1001.geometry} material={materials['Antorcha.002']} />
        <mesh geometry={nodes.Antorchas1003.geometry} material={materials['Antorcha.002']} />
        <mesh geometry={nodes.Antorchas1004.geometry} material={materials['Antorcha.002']} />
        <mesh geometry={nodes.Antorchas1005.geometry} material={materials['Antorcha.002']} />
        <mesh geometry={nodes.Antorchas1006.geometry} material={materials['Antorcha.002']} />
        <mesh geometry={nodes.Antorchas1007.geometry} material={materials['Antorcha.002']} />
        <mesh geometry={nodes.Antorchas1008.geometry} material={materials['Antorcha.002']} />
        <mesh geometry={nodes.Antorchas1009.geometry} material={materials['Antorcha.002']} />
        <mesh geometry={nodes.Lampara.geometry} material={materials['Material.010']} />
        <mesh geometry={nodes.Lampara001.geometry} material={materials['Material.010']} />
        <mesh geometry={nodes.Lampara002.geometry} material={materials['Material.010']} />
        <mesh geometry={nodes.Lampara003.geometry} material={materials['Material.010']} />
        <mesh geometry={nodes.Lampara004.geometry} material={materials['Material.010']} />
        <mesh geometry={nodes.Lampara005.geometry} material={materials['Material.010']} />
        <mesh geometry={nodes.Lampara006.geometry} material={materials['Material.010']} />
        <mesh geometry={nodes.Lampara007.geometry} material={materials['Material.010']} />
        <mesh geometry={nodes.Lampara008.geometry} material={materials['Material.010']} />
        <mesh geometry={nodes.Lampara009.geometry} material={materials['Material.010']} />
        <mesh geometry={nodes.Lampara010.geometry} material={materials['Material.010']} />
        <mesh geometry={nodes.Lampara011.geometry} material={materials['Material.010']} />
      </group>

      <group>
        <group>
          <mesh geometry={nodes.Laberinto2_1.geometry} material={materials.walls} />
          <mesh geometry={nodes.Laberinto2_2.geometry} material={materials.Gris} />
        </group>
        <mesh geometry={nodes.PisoLaberinto2.geometry} material={materials.ground} />
        <group>
          <mesh geometry={nodes.TechoLaberinto.geometry} material={materials.walls} />
          <mesh geometry={nodes.TechoLaberinto_1.geometry} material={materials.Gris} />
        </group>
      </group>
        
      </group>
        </RigidBody>
        
        <RigidBody type="fixed" colliders="cuboid">
        <group>
          <mesh geometry={nodes['Barril-LP_Barril_0'].geometry} material={materials.Barril} />
          <mesh geometry={nodes['Barril-LP_Barril_0_1'].geometry} material={materials.Toalha} />
          <mesh geometry={nodes['Barril-LP_Barril_0_2'].geometry} material={materials.Capy} />
          <mesh geometry={nodes['Barril-LP_Barril_0_3'].geometry} material={materials.metal} />
          <mesh geometry={nodes['Barril-LP_Barril_0_4'].geometry} material={materials.eyes} />
          <mesh geometry={nodes['Barril-LP_Barril_0_5'].geometry} material={materials.material_0} />
        </group>
        <mesh geometry={nodes.Chiguiro2.geometry} material={materials['Material.002']} />
        <group>
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials.PM3D_Cube3D2} />
          <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.PM3D_Cube3D1} />
        </group>
        <group>
          <group>
            <group>
              <group>
                <group>
                  <group />
                </group>
              </group>
              <group>
                <group>
                  <group />
                </group>
              </group>
              <group>
                <group>
                  <group />
                </group>
              </group>
              <group>
                <mesh
                  geometry={nodes.BezierCircle001_Material_0.geometry}
                  material={materials['Material.008']}
                />
              </group>
              <group>
                <group />
              </group>
              <group>
                <mesh
                  geometry={nodes.Catenary_Material018_0.geometry}
                  material={materials['Material.018']}
                />
              </group>
              <group>
                <mesh
                  geometry={nodes.Circle002_Material005_0.geometry}
                  material={materials['Material.006']}
                />
              </group>
              <group>
                <mesh
                  geometry={nodes.Cube003_Material027_0.geometry}
                  material={materials['Material.027']}
                />
                <mesh
                  geometry={nodes.Cube003_Material028_0.geometry}
                  material={materials['Material.028']}
                />
                <mesh
                  geometry={nodes.Cube003_Material029_0.geometry}
                  material={materials['Material.029']}
                />
              </group>
              <group>
                <mesh
                  geometry={nodes.INOMATA_Model2_LOD1001_Material014_0.geometry}
                  material={materials['Material.014']}
                />
                <group>
                  <mesh
                    geometry={nodes.Sphere_Material001_0.geometry}
                    material={materials['Material.004']}
                  />
                </group>
              </group>
              <group>
                <mesh
                  geometry={nodes.INOMATA_Model2_LOD1002_Material019_0.geometry}
                  material={materials['Material.019']}
                />
              </group>
              <group>
                <mesh
                  geometry={nodes.Plane_Material002_0.geometry}
                  material={materials['Material.009']}
                />
              </group>
              <group>
                <group>
                  <group />
                </group>
              </group>
              <group>
                <mesh
                  geometry={nodes.Sphere002_Material017_0.geometry}
                  material={materials['Material.017']}
                />
                <mesh
                  geometry={nodes.Sphere002_Worn_Metal_Paint_Procedural_0.geometry}
                  material={materials.Worn_Metal_Paint_Procedural}
                />
              </group>
              <group>
                <mesh
                  geometry={nodes.Sphere003_Material017_0.geometry}
                  material={materials['Material.017']}
                />
                <mesh
                  geometry={nodes.Sphere003_Worn_Metal_Paint_Procedural_0.geometry}
                  material={materials.Worn_Metal_Paint_Procedural}
                />
              </group>
            </group>
          </group>
        </group>
        <group>
          <mesh geometry={nodes.Sphere001.geometry} material={materials.Naranja} />
          <mesh geometry={nodes.Sphere001_1.geometry} material={materials.Negro} />
          <mesh geometry={nodes.Sphere001_2.geometry} material={materials.Amarillo} />
          <mesh geometry={nodes.Sphere001_3.geometry} material={materials.Negro2} />
          <mesh geometry={nodes.Sphere001_4.geometry} material={materials['Amarillo.001']} />
        </group>

        

        </RigidBody>

        <mesh geometry={nodes.PuertaAbiertaEdificio.geometry} material={materials.techoE} />
        <mesh
          geometry={nodes.PuertaAbiertaSalones.geometry}
          material={materials.mat_railing_rails}
        />
        <mesh geometry={nodes.PuertasAbiertasLaberinto.geometry} material={materials.Puerta} />
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/world/Plazoleta.glb");
