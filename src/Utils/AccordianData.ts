export interface Item {
  name: string;
  type: string;
  thumb: string;
  link: string;
  embedOn : string ; 
}

export interface AccordianDataType {
  [category: string]: Item[];
}

const AccordianData: AccordianDataType = {
  "Sofa Customization": [
    {
      name: "L Shaped",
      type: "glbModel",
      thumb:
        "https://d2629xvaofl3d3.cloudfront.net/materials/webp_thumbs/5.webp",
      link: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/gltf/Sectional_Sofa.optimized.glb",
      embedOn : '' , 
    },
    {
      name: "Wooden Sofa",
      type: "glbModel",
      thumb:
        "https://d2629xvaofl3d3.cloudfront.net/materials/webp_thumbs/7.webp",
      link: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/gltf/Wooden_Sofa.glb",
      embedOn : '' , 
    },
    {
      name: "Rounded Sofa",
      type: "glbModel",
      thumb:
        "https://d2629xvaofl3d3.cloudfront.net/materials/webp_thumbs/4.webp",
      link: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/gltf/Sofa_Set2.glb",
      embedOn : '' , 
    },
    {
      name: "L Shaped Sofa",
      type: "glbModel",
      thumb:
        "https://d2629xvaofl3d3.cloudfront.net/materials/webp_thumbs/6.webp",
      link: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/gltf/Sofa_Set.glb",
      embedOn : '' , 
    },
  ],
  Leathers: [
    {
      name: "Bull Leather",
      type: "texture",
      thumb:
        "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/BullLeather/thumb.webp",
      link: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/BullLeather/Webp/",
      embedOn : 'fab' , 
    },
    {
      name: "Rough Leather",
      type: "texture",
      thumb:
        "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/CowHide/thumb.webp",
      link: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/CowHide/Webp/",
      embedOn : 'fab' , 
    },
    {
      name: "Sheep Leather",
      type: "texture",
      thumb:
        "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/Thumbnails/03.webp",
      link: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/SheepLeather/",
      embedOn : 'fab' , 
    },
    {
      name: "Taurillion Leather",
      type: "texture",
      thumb:
        "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/Thumbnails/04.webp",
      link: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/TaurillionLeather/",
      embedOn : 'fab' , 
    },
    {
      name: "Bull Large Grain",
      type: "texture",
      thumb:
        "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v3/thumbs/thumb01.webp",
      link: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v3/Bull_Leather_lg/",
      embedOn : 'fab' , 
    },
    {
      name: "Nappa Leather",
      type: "texture",
      thumb:
        "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v3/thumbs/thumb02.webp",
      link: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v3/Nappa_Leather/",
      embedOn : 'fab' , 
    },
    {
      name: "Natural Teju",
      type: "texture",
      thumb:
        "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v3/thumbs/thumb03.webp",
      link: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v3/Natural Teju/",
      embedOn : 'fab' , 
    },
    {
      name: "Pig Triangle Embross",
      type: "texture",
      thumb:
        "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v3/thumbs/thumb04.webp",
      link: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v3/PigTriangleEmbross/",
      embedOn : 'fab' , 
    },
    {
      name: "Dyed Deer",
      type: "texture",
      thumb:
        "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v3/thumbs/thumb05.webp",
      link: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v3/DyedDeer/",
      embedOn : 'fab' , 
    },
    {
      name: "Lambskin Embross",
      type: "texture",
      thumb:
        "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v3/thumbs/thumb06.webp",
      link: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v3/LambskinEmbross/",
      embedOn : 'fab' , 
    },
  ],
  Fabrics: [
    {
      name: "Denim Fabric",
      type: "texture",
      thumb:
        "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/Thumbnails/05.webp",
      link: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/DenimFabric/",
      embedOn : 'fab' , 
    },
    {
      name: "Ripstop Fabric",
      type: "texture",
      thumb:
        "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/Thumbnails/07.webp",
      link: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/RipstopFabric/",
      embedOn : 'fab' , 
    },
    {
      name: "Synthetic Wool",
      type: "texture",
      thumb:
        "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/Thumbnails/08.webp",
      link: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/SynteticWool/",
      embedOn : 'fab' , 
    },
    {
      name: "CrepeFabric",
      type: "texture",
      thumb:
        "https://d2629xvaofl3d3.cloudfront.net/c3dV5/imgs/v4/thums/cerpegfab_with_bgc.webp",
      link: "https://d2629xvaofl3d3.cloudfront.net/c3dV5/imgs/v4/CrepeFabric/",
      embedOn : 'fab' , 
    },
    {
      name: "Cross Quilted",
      type: "texture",
      thumb:
        "https://d2629xvaofl3d3.cloudfront.net/c3dV5/imgs/v4/thums/crossqu_with_bgc.webp",
      link: "https://d2629xvaofl3d3.cloudfront.net/c3dV5/imgs/v4/CrossQuilted/",
      embedOn : 'fab' , 
    },
    {
      name: "Fabric Printed",
      type: "texture",
      thumb:
        "https://d2629xvaofl3d3.cloudfront.net/c3dV5/imgs/v4/thums/fabprin_with_bgc.webp",
      link: "https://d2629xvaofl3d3.cloudfront.net/c3dV5/imgs/v4/FabricPrinted/",
      embedOn : 'fab' , 
    },
    {
      name: "Fabric Scales",
      type: "texture",
      thumb:
        "https://d2629xvaofl3d3.cloudfront.net/c3dV5/imgs/v4/thums/fabsc_with_bgc.webp",
      link: "https://d2629xvaofl3d3.cloudfront.net/c3dV5/imgs/v4/FabricScales/",
      embedOn : 'fab' , 
    },
    {
      name: "Loutus Quilted",
      type: "texture",
      thumb:
        "https://d2629xvaofl3d3.cloudfront.net/c3dV5/imgs/v4/thums/lotusqu_with_bgc.webp",
      link: "https://d2629xvaofl3d3.cloudfront.net/c3dV5/imgs/v4/LoutusQuilted/",
      embedOn : 'fab' , 
    },
    {
      name: "Micro fiber",
      type: "texture",
      thumb:
        "https://d2629xvaofl3d3.cloudfront.net/c3dV5/imgs/v4/thums/mfl_with_bgc.webp",
      link: "https://d2629xvaofl3d3.cloudfront.net/c3dV5/imgs/v4/MicrofiberLined/",
      embedOn : 'fab' , 
    },
  ],
  Wood: [
    {
      name: "Bamboo Wood",
      type: "texture",
      thumb:
        "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/Thumbnails/09.webp",
      link: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/BambooWood/",
      embedOn : 'woo' , 
    },
    {
      name: "Beech Wood",
      type: "texture",
      thumb:
        "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/Thumbnails/10.webp",
      link: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/BeechWood/",
      embedOn : 'woo' , 
    },
    {
      name: "Teak Wood",
      type: "texture",
      thumb:
        "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/Thumbnails/11.webp",
      link: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/TeakWood/",
      embedOn : 'woo' , 
    },
    {
      name: "Wenge Wood",
      type: "texture",
      thumb:
        "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/Thumbnails/12.webp",
      link: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/WengeWood/",
      embedOn : 'woo' , 
    },
  ],
//   Metals: [
//     {
//       name: "Brushed Metal",
//       type: "texture",
//       thumb:
//         "https://d2629xvaofl3d3.cloudfront.net/materials/webp_thumbs/20.webp",
//       link: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/cross_brushed_metal/Webp/",
//       embedOn : 'met' , 
//     },
//     {
//       name: "Iron Forged",
//       type: "texture",
//       thumb:
//         "https://d2629xvaofl3d3.cloudfront.net/materials/webp_thumbs/21.webp",
//       link: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/iron_forged/Webp/",
//       embedOn : 'met' , 
//     },
//     {
//       name: "Metal Classic",
//       type: "texture",
//       thumb:
//         "https://d2629xvaofl3d3.cloudfront.net/materials/webp_thumbs/22.webp",
//       link: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/metal_classic/Webp/",
//       embedOn : 'met' , 
//     },
//     {
//       name: "Nail Metal",
//       type: "texture",
//       thumb:
//         "https://d2629xvaofl3d3.cloudfront.net/materials/webp_thumbs/23.webp",
//       link: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/nail_metal/Webp/",
//       embedOn : 'met' , 
//     },
//   ],
};

export { AccordianData };
