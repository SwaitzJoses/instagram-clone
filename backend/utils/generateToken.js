import jwt from 'jsonwebtoken'

const generateToken=(id, name)=>{ // id is the payload  
    return jwt.sign({id , name}, process.env.JWT_SECRET , {
        expiresIn:'30d',
    })
}

export default generateToken