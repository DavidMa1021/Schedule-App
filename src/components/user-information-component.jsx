


export default function UserInformationComponent({ user}) {

    
    return (
        <div className="card " style={{ 'max-width': '950px', 'backgroundColor': '#FFFFF3', 'border': 'none' }}>
            <div className="row g-0 mx-4 mt-4">
                <div className="col-md-5">
                    <img src='https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1680359704~exp=1680360304~hmac=de1788a3fd02c2471e185557da0a68b3aec4ad6fbc8f6a50b700bb74d6b13f01' className="img-fluid " />
                </div>
                <div className="col-md-7">
                    <div className="card-body ">
                        <h5 className="card-title mb-3" id='title'>Nombre: {user.name}</h5>
                        <h6 className="card-subtitle mb-4 " id='price'>Username: {user.username}</h6>
                        <p className="card-text" id='text'>Correo electrónico: {user.email}</p>
                        <p className="card-text" id='text'>Dirección: {user.email}</p>
                        <p className="card-text" id='text'>Teléfono: {user.phone}</p>
                        <p className="card-text" id='text'>Website: {user.website}</p>
                        <p className="card-text" id='text'>Empresa: {user.company.name}</p>
                        
                        
                    </div>
                </div>
            </div>
        </div>

    )
}