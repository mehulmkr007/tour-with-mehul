
import Card from './Card'



function Tours({tours , removeTour}){
    return (
        <div className='container'>
            <h1 className='title'>Tour With Mehul</h1>
            <div className='cards'>
                {
                    tours.map((tour)=>{
                        return <Card {...tour} removeTour={removeTour}></Card>
                    })
                }
            </div>
        </div>
    )
}

export default Tours