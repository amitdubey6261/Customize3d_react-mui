export interface datatype{
    name : string , 
    type : string , 
    path : string
}

export const data : datatype[]  = [
    {
        name: 'Room',
        type : 'glbModel' , 
        path: 'https://d2629xvaofl3d3.cloudfront.net/c3dV6/Room3_optimize2.glb',
    },
    {
        name: 'Accessories',
        type : 'glbModel' , 
        path: 'https://d2629xvaofl3d3.cloudfront.net/c3dV6/Accessories_optimize.glb',
    },
    {
        name: 'Floor Lamp',
        type : 'glbModel' , 
        path: 'https://d2629xvaofl3d3.cloudfront.net/c3dV6/Floor_Lamp_optimize.glb',
    },
    {
        name : "Neutral HDRI" , 
        type : "hdri" ,
        path : "https://d2629xvaofl3d3.cloudfront.net/c3dV6/neutral.hdr" 
    }
]