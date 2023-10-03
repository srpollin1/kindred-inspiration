import { RoundedBox, ScrollControls, Scroll, Sparkles } from "@react-three/drei"
import { Kindred } from "./models/Kindred"





function App() {

  return (
    <>
      <color attach={'background'} args={['#0B4887']} />
      <directionalLight color="black" position={[0, 0, 5]} />
      <ScrollControls pages={4} damping={0.2}>
        {/* Canvas contents in here will *not* scroll, but receive useScroll! */}

        {/*AQUI VA EL MODELO 3D - no se mueve*/}
        <Kindred position={[0, -1, 4]} scale={1} />
        <Sparkles size={2} color={"#fff"} scale={[10, 10, 10]} />

        <Scroll>
          {/* Canvas contents in here will scroll along */}
          {/*AQUI VA EL MODELO 3D - SE MUEVE*/}


        </Scroll>
        <Scroll html style={{ width: '100%' }}>
          <h1 className='title' style={{ color: '#cdcbca', position: 'absolute', top: `65vh`, left: '50%', fontSize: '6em', transform: `translate(-50%,-50%)` }}>Kindred</h1>

          <div className='row' style={{ position: 'absolute', top: `132vh` }}>
            <h2>LOS CAZADORES ETERNOS</h2>
            <p style={{ maxWidth: '336px' }}>Divididos, pero nunca separados, Kindred representan las dos esencias de la muerte.
              El arco de Cordera ofrece una rápida liberación de los pesares del reino mortal a aquellos
              que aceptan su destino. Lobo da caza a quienes intentan escapar de él y les revela su inexorable
              necesidad con una dentellada de sus poderosas fauces. Aunque las interpretaciones sobre
              la naturaleza de Kindred varían a lo largo y ancho de Runaterra, lo cierto es que todos
              los mortales que moran en ella deben elegir la cara de la muerte que prefieren.</p>
            <button>Leer mas</button>
          </div>


          <div className='row' style={{ position: 'absolute', top: `230vh` }}>
            <div className='col' style={{ position: 'absolute', right: `40px`, width: "540px" }}>
              <div className="rol">
                <h2 style={{ maxWidth: "440px" }}>ROL-TIRADOR</h2>
                <p style={{ maxWidth: '440px' }}>MARCA DE KINDRED, DANZA DE FLECHAS,
                  FRENESÍ DE LOBO, TEMOR CRECIENTE, RESPIRO DE CORDERA</p>
                <button>Leer mas</button>
              </div>
            </div>
          </div>

          <button style={{ position: 'absolute', top: `350vh`, left: '50%', transform: `translate(-50%,-50%)` }}>JUGAR AHORA</button>
        </Scroll>
      </ScrollControls>
    </>
  )
}

export default App
