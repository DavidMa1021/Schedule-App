


export default function UserInformationComponent({ user}) {

    
    return (
        <div className="card " style={{ 'max-width': '850px', 'backgroundColor': '#FFFFF3', 'border': 'none' }}>
            <div className="row mt-3 mx-4">
                <h2 id="subtitle"> DATOS DEL ENCARGADO</h2>
            </div>
            <div className="row g-0 mx-4 mt-4 align-items-center justify-content-center">
                <div className="col-md-4 col-5 ">
                    <img src='https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1680359704~exp=1680360304~hmac=de1788a3fd02c2471e185557da0a68b3aec4ad6fbc8f6a50b700bb74d6b13f01' className="img-fluid " />
                </div>
                <div className="col-md-8">
                    <div className="card-body ">
                        <h5 className="card-title mb-3" id='card-subtitle'>{user.name}</h5>
                        <h6 className="card-subtitle mb-4 " id='price'><strong>Nombre de usuario:</strong> {user.username}</h6>
                        <p className="card-text" id='text'><strong>Correo electrónico:</strong> {user.email}</p>
                        <p className="card-text" id='text'><strong>Dirección: </strong> Calle {user.address.street} {user.address.suite} - {user.address.city}</p>
                        <p className="card-text" id='text'><strong>Teléfono:</strong> {user.phone}</p>
                        <p className="card-text" id='text'><strong>Website:</strong> {user.website}</p>
                        <p className="card-text" id='text'><strong>Empresa:</strong> {user.company.name}</p>
                        
                        
                    </div>
                </div>
            </div>
        </div>

    )
}