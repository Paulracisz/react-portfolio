import Bug from '../resources/svgs/bug-svgrepo-com.svg'
const bugArray = []


    for(let i = 0; i <= 10; i++){ 
        bugArray.push(<object className='bug' aria-label='bug svg' type = "image/svg+xml" data = {Bug}></object>)
    }

export { bugArray }