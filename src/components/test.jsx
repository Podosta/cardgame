import React from "react"
import * as THREE from 'three';
import GLTFLoader from 'three-gltf-loader';

export default () => {

const loader = new GLTFLoader();
loader.load(
	'C:/Users/Miles/Desktop/Threejs/table.glb',
	( gltf ) => {
		// called when the resource is loaded
		scene.add( gltf.scene );
	},
	( xhr ) => {
		// called while loading is progressing
		console.log( `${( xhr.loaded / xhr.total * 100 )}% loaded` );
	},
	( error ) => {
		// called when loading has errors
		console.error( 'An error happened', error );
	},
);
return "im cool"
}