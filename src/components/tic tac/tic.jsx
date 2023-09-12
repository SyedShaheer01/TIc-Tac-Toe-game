 import { useRef, useState } from 'react'
import './tic.css'
import assts from '../assts/cross.png'
import circle from '../assts/circle.png'



 let data=["" ,"", "", "","","","","",""]
//  let arr=[box1 ,box2,box3.box4,box5.box6,box7,box8,box9]

 
 function TicTac(){
    let [count,setCount]=useState(0)
    let [lock,setLock]=useState(false)

    let tittle=useRef(null)
    let box1=useRef(null)
    let box2=useRef(null)
    let box3=useRef(null)
    let box4=useRef(null)
    let box5=useRef(null)
    let box6=useRef(null)
    let box7=useRef(null)
    let box8=useRef(null)
    let box9=useRef(null)


    let arr=[box1,box2,box3,box4,box5,box6,box7,box8,box9]
     const togle=(e,num)=>{
        if(lock){

          return 0
          
        }
      if(count%2===0){
        e.target.innerHTML=`<img src='${assts}'>`
        data[num]='X'
        setCount(++count)

      }
      else{
        e.target.innerHTML=`<img src='${circle}'>`
        data[num]='O'
        setCount(++count)
      }
      
      Checkwin()
      
    }

    const Checkwin=()=>{

      if(data[0]===data[1] && data[1]===data[2] && data[2]!==""){

        won(data[2])

      }
      else if(data[3]===data[4] && data[4]===data[5] && data[5]!==""){


        won(data[5])

      }
      else if(data[6]===data[7] && data[7]===data[8] && data[8]!==""){


        won(data[8])
      }

      else if(data[0]===data[3] && data[3]===data[6] && data[6]!==""){
        won(data[6])

      }
      else if(data[1]===data[4] && data[4]===data[7] && data[7]!==""){

        won(data[7])

      }
      else if(data[2]===data[5] && data[5]===data[8] && data[8]!==""){
        won(data[8])

      }
      else if(data[0]===data[4] && data[4]===data[8] && data[8]!==""){
        won(data[8])

      }
      else if(data[2]===data[4] && data[4]===data[6] && data[6]!==""){
        won(data[6])

      }
      



    }

    const won=(winner)=>{

      setLock(true)

      if(winner==="X"){
        tittle.current.innerHTML=`Congratulation: <img src='${assts}'> <span>You Win!<span/>`

      }
      else{
        tittle.current.innerHTML=`Congratulation: <img src='${circle}'> <span>You Win!<span/>`
      }
    }

    let reset=()=>{

      setLock(false)
      

      data=["" ,"", "", "","","","","",""]
        tittle.current.innerHTML="Tic Tac Toe <span>Game<span/>"
        // data[num]="X"
        
         arr.map((e)=>{

          
          e.current.innerHTML=''

      })
    }
    
    return(
      
      <div>
          <h1 className='heading' ref={tittle}>Tic Tac Toe <span> Game</span></h1>


            <div className='head'>

                <div>


           <div className='boxes' ref={box1}onClick={(e)=> {togle(e,0)}}></div>
            <div className='boxes'ref={box2} onClick={(e)=> {togle(e,1)}}></div>
            <div className='boxes'ref={box3} onClick={(e)=> {togle(e,2)}}></div>
            
                </div>

            <div>
           <div className='boxes'ref={box4}  onClick={(e)=> {togle(e,3)}}></div>
           <div className='boxes'ref={box5} onClick={(e)=> {togle(e,4)}}></div>
           <div className='boxes'ref={box6} onClick={(e)=> {togle(e,5)}}></div>
            </div>  
            
                     <div>
                
           <div className='boxes'ref={box7} onClick={(e)=> {togle(e,6)}}></div>
           <div className='boxes'ref={box8} onClick={(e)=> {togle(e,7)}}></div>
        <div className='boxes'ref={box9}  onClick={(e)=> {togle(e,8)}}></div>  
            </div>
        </div>
                <div className='btn'>

                <button onClick={()=>{reset()}}><span></span>Reset</button>
                </div>
        </div>
    )
    }

  export default TicTac