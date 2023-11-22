

function MapData(){
    

    let employeeData = [
        {id:1,name:"Raman",age:10},
        {id:2,name:"Dev",age:11},
        {id:3,name:"Kannan",age:12}
    ]

    return(
        <div>
            {
                employeeData.map((obj)=>{
                    return(
                        <div key={obj.id}>
                            <h6>{obj.name}</h6>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MapData;