/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 scene.gltf --transform 
Files: scene.gltf [2MB] > scene-transformed.glb [6.88MB] (-244%)
Author: maisth (https://sketchfab.com/maisth)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/kindred-league-of-legends-rigged-06a32da82b0441c39950296315307400
Title: Kindred (League of Legends) - Rigged
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/scene-transformed.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes._rootJoint} />
        <mesh name="Podium_Podium1_0" geometry={nodes.Podium_Podium1_0.geometry} material={materials.Podium1} rotation={[-Math.PI / 2, 0, 0]} scale={0.016} />
        <mesh name="Podium_Podium2_0" geometry={nodes.Podium_Podium2_0.geometry} material={materials.Podium2} rotation={[-Math.PI / 2, 0, 0]} scale={0.016} />
        <skinnedMesh name="Object_35" geometry={nodes.Object_35.geometry} material={materials.TX_Hair} skeleton={nodes.Object_35.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={0.492} />
        <skinnedMesh name="Object_36" geometry={nodes.Object_36.geometry} material={materials.Outline} skeleton={nodes.Object_36.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={0.492} />
        <skinnedMesh name="Object_38" geometry={nodes.Object_38.geometry} material={materials.TX_Hair} skeleton={nodes.Object_38.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={0.492} />
        <skinnedMesh name="Object_39" geometry={nodes.Object_39.geometry} material={materials.Outline} skeleton={nodes.Object_39.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={0.492} />
        <skinnedMesh name="Object_41" geometry={nodes.Object_41.geometry} material={materials.TX_Hair} skeleton={nodes.Object_41.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={0.492} />
        <skinnedMesh name="Object_42" geometry={nodes.Object_42.geometry} material={materials.Outline} skeleton={nodes.Object_42.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={0.492} />
        <skinnedMesh name="Object_44" geometry={nodes.Object_44.geometry} material={materials.TX_Hair} skeleton={nodes.Object_44.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={0.492} />
        <skinnedMesh name="Object_45" geometry={nodes.Object_45.geometry} material={materials.Outline} skeleton={nodes.Object_45.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={0.492} />
        <skinnedMesh name="Object_47" geometry={nodes.Object_47.geometry} material={materials.TX_Hair} skeleton={nodes.Object_47.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={0.492} />
        <skinnedMesh name="Object_49" geometry={nodes.Object_49.geometry} material={materials.TX_Hair} skeleton={nodes.Object_49.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={0.492} />
        <skinnedMesh name="Object_51" geometry={nodes.Object_51.geometry} material={materials.TX_Hair} skeleton={nodes.Object_51.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={0.492} />
        <skinnedMesh name="Object_53" geometry={nodes.Object_53.geometry} material={materials.TX_Hair} skeleton={nodes.Object_53.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={0.492} />
        <skinnedMesh name="Object_55" geometry={nodes.Object_55.geometry} material={materials.TX_Hair} skeleton={nodes.Object_55.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={0.492} />
        <skinnedMesh name="Object_57" geometry={nodes.Object_57.geometry} material={materials.TX_Hair} skeleton={nodes.Object_57.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={0.492} />
        <skinnedMesh name="Object_59" geometry={nodes.Object_59.geometry} material={materials.TX_Hair} skeleton={nodes.Object_59.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={0.492} />
        <skinnedMesh name="Object_61" geometry={nodes.Object_61.geometry} material={materials.TX_Hair} skeleton={nodes.Object_61.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={0.492} />
        <skinnedMesh name="Object_63" geometry={nodes.Object_63.geometry} material={materials.TX_Hair} skeleton={nodes.Object_63.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={0.492} />
        <skinnedMesh name="Object_65" geometry={nodes.Object_65.geometry} material={materials.TX_Hair} skeleton={nodes.Object_65.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={0.492} />
        <skinnedMesh name="Object_67" geometry={nodes.Object_67.geometry} material={materials.TX_Body} skeleton={nodes.Object_67.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={0.492} />
        <skinnedMesh name="Object_68" geometry={nodes.Object_68.geometry} material={materials.Outline} skeleton={nodes.Object_68.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={0.492} />
        <skinnedMesh name="Object_70" geometry={nodes.Object_70.geometry} material={materials.TX_Body} skeleton={nodes.Object_70.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={0.492} />
        <skinnedMesh name="Object_71" geometry={nodes.Object_71.geometry} material={materials.Outline} skeleton={nodes.Object_71.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={0.492} />
        <skinnedMesh name="Object_73" geometry={nodes.Object_73.geometry} material={materials.TX_Body} skeleton={nodes.Object_73.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={0.492} />
        <skinnedMesh name="Object_75" geometry={nodes.Object_75.geometry} material={materials.TX_Body} skeleton={nodes.Object_75.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={0.492} />
        <skinnedMesh name="Object_76" geometry={nodes.Object_76.geometry} material={materials.Outline} skeleton={nodes.Object_76.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={0.492} />
        <skinnedMesh name="Object_78" geometry={nodes.Object_78.geometry} material={materials.TX_Eyes} skeleton={nodes.Object_78.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={0.492} />
        <skinnedMesh name="Object_80" geometry={nodes.Object_80.geometry} material={materials.TX_Body} skeleton={nodes.Object_80.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={0.492} />
        <skinnedMesh name="Object_82" geometry={nodes.Object_82.geometry} material={materials.TX_Body} skeleton={nodes.Object_82.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={0.492} />
        <skinnedMesh name="Object_84" geometry={nodes.Object_84.geometry} material={materials.TX_Body} skeleton={nodes.Object_84.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={0.492} />
        <skinnedMesh name="Object_85" geometry={nodes.Object_85.geometry} material={materials.Outline} skeleton={nodes.Object_85.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={0.492} />
        <skinnedMesh name="Object_87" geometry={nodes.Object_87.geometry} material={materials.TX_Eyes} skeleton={nodes.Object_87.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={0.492} />
        <skinnedMesh name="Object_89" geometry={nodes.Object_89.geometry} material={materials.TX_Body} skeleton={nodes.Object_89.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={0.492} />
        <skinnedMesh name="Object_90" geometry={nodes.Object_90.geometry} material={materials.Outline} skeleton={nodes.Object_90.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={0.492} />
        <skinnedMesh name="Object_92" geometry={nodes.Object_92.geometry} material={materials.TX_Mask} skeleton={nodes.Object_92.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={0.492} />
        <skinnedMesh name="Object_93" geometry={nodes.Object_93.geometry} material={materials.TX_MaskEyes} skeleton={nodes.Object_93.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={0.492} />
        <skinnedMesh name="Object_94" geometry={nodes.Object_94.geometry} material={materials.Outline} skeleton={nodes.Object_94.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={0.492} />
        <skinnedMesh name="Object_96" geometry={nodes.Object_96.geometry} material={materials.TX_Bow} skeleton={nodes.Object_96.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={0.492} />
        <skinnedMesh name="Object_97" geometry={nodes.Object_97.geometry} material={materials.Outline} skeleton={nodes.Object_97.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={0.492} />
        <skinnedMesh name="Object_99" geometry={nodes.Object_99.geometry} material={materials.TX_Bow} skeleton={nodes.Object_99.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={0.492} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene-transformed.glb')
