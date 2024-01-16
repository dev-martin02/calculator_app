import { useState} from 'react'
import './content.css'

function Content(){
    
    const [content, setContent] = useState([])
    const [oldNumber, setOldNumber] = useState([])
    const [sign, setSign] = useState("")


    const convertNumber = (num) => {
        const newNum = Number(num)
      return setContent(oldContent => [...oldContent, newNum])
    }

    const get_value_number = (e) => {
        convertNumber(e.target.textContent)
     }
     
     // Delete function
        const delete_number = () => {
            const content_copy = [...content]
            content_copy.pop()
            setContent(content_copy)
        }
        
        //add 
        const add_operation = () => {
            if(sign === ""){ 
                {setOldNumber([...content])
                setSign("+")
                setContent([])}
            }
            
            if(sign !== '+'){
                setSign("+")
                setContent([])
            }  
          };

        // rest
        const rest_operation = () => {
            
            if(sign === ""){ 
                {setOldNumber([...content])
                setSign("-")
                setContent([])}
            }
            
            if(sign !== '-'){
                setSign("-")
                setContent([])
            }  

          };

        //multiply
        const multiply_operation = () => {
            if(sign === ""){ 
                {setOldNumber([...content])
                setSign("*")
                setContent([])}
            }
            
            if(sign !== '*'){
                setSign("*")
                setContent([])
            }  
          };

        //divide
        const divide_operation = () => {
            if(sign === ""){ 
                {setOldNumber([...content])
                setSign("/")
                setContent([])}
            }
            
            if(sign !== '/'){
                setSign("/")
                setContent([])
            }  
          };

        //reset
        const reset = () =>{
            setOldNumber([]);
            setSign("")
            setContent([])
        }

        const add_point = () => {
            if(!content.includes('.') ){
                setContent([...content, '.'])
            }
        }
        
    
    // result
    const result = () => {
        if (sign === "+") {
            // Calculate the sum of oldNumber and content+
            const num_result =
              Number(oldNumber.join('')) + Number(content.join(''));
              console.log(num_result)
            setContent([num_result]);
          }else if(sign === "-"){
            const num_result = Number(oldNumber.join('')) - Number(content.join(''))
            setContent([num_result])
        
        } else if(sign === "*"){
            const num_result = Number(content.join('')) * Number(oldNumber.join('')) 
            setContent([num_result])
        
        } else if(sign === "/"){
            const num_result = Number(oldNumber.join('')) / Number(content.join('')) 
            setContent([num_result])
        }
    }

    return(
        <div>            
            <div className="display-numbers">
                {content.map((number, index) => (
                    <p key={index}>{number}</p>
                ))}

            </div>

            <div className="content">

                <button className='digit-number' onClick={get_value_number} >7</button>
                <button className='digit-number' onClick={get_value_number}>8</button>
                <button className='digit-number' onClick={get_value_number}>9</button>
                <button onClick={delete_number}>DEL</button>

                <button className='digit-number' onClick={get_value_number}>4</button>
                <button className='digit-number' onClick={get_value_number}>5</button>
                <button className='digit-number' onClick={get_value_number}>6</button>
                <button onClick={add_operation}>+</button>

                <button className='digit-number' onClick={get_value_number}>1</button>
                <button className='digit-number' onClick={get_value_number}>2</button>
                <button className='digit-number' onClick={get_value_number}>3</button>
                <button onClick={rest_operation}>-</button>

                <button onClick={add_point}>.</button>
                <button className='digit-number' onClick={get_value_number}>0</button>
                <button onClick={divide_operation}>/</button>
                <button onClick={multiply_operation}>x</button>

                <button onClick={reset}>RESET</button>
                <button onClick={result}> = </button>
            </div>
        </div>
    )
}

export default Content