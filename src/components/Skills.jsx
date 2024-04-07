import React from 'react'
import SkillText from './SkillText';
import SkillDataProvider from './SkillDataProvider';
import html from '../public/html.png'
import css from '../public/css.png'
import js from '../public/js.png'
import ts from '../public/ts.png'
import react from '../public/react.png'
import Tailwind from '../public/tailwind.png'
import Material from '../public/mui.png'
import redux from '../public/redux.png'
import Next from '../public/next.png'
import Framer from '../public/framer.png'
import Stripe from '../public/stripe.webp'
import node from '../public/node-js.png'
import Mongo from '../public/mongodb.png'
import Express from '../public/express.png'
import Docker from "../public/docker.webp"
import native from "../public/ReactNative .png"
import firebase from  "../public/Firebase.png"
import Postgres from "../public/postger.png"
import MySql from  "../public/mysql.png"
import prisma from  "../public/prisma.webp"
import Graph from "../public/graphql.png"
import Tauri from "../public/tauri.svg"
import Figma from "../public/figma.png"

const Skills = () => {
     const Skill_data = [
          {
               skill_name: "Html 5",
               Image: html,
               width: 80,
               height: 80,
          },
          {
               skill_name: "Css",
               Image: css,
               width: 80,
               height: 80,
          },
          {
               skill_name: "Java Script",
               Image: js,
               width: 65,
               height: 65,
          },
          {
               skill_name: "Tailwind Css",
               Image: Tailwind,
               width: 80,
               height: 80,
          },
          {
               skill_name: "Material UI",
               Image: Material,
               width: 80,
               height: 80,
          },
          {
               skill_name: "React",
               Image: react,
               width: 80,
               height: 80,
          },
          {
               skill_name: "Redux",
               Image: redux,
               width: 80,
               height: 80,
          },
          {
               skill_name: "Type Script",
               Image: ts,
               width: 80,
               height: 80,
          },
          {
               skill_name: "Next js 13",
               Image: Next,
               width: 80,
               height: 80,
          },
          {
               skill_name: "Framer Motion",
               Image: Framer,
               width: 80,
               height: 80,
          },
          {
               skill_name: "Stripe Payment",
               Image: Stripe,
               width: 80,
               height: 80,
          },
          {
               skill_name: "Node js",
               Image: node,
               width: 80,
               height: 80,
          },

          {
               skill_name: "Express js",
               Image: Express,
               width: 80,
               height: 80,
          },
          {
               skill_name: "Mongo db",
               Image: Mongo,
               width: 40,
               height: 40,
          },
     ];
     const Android = [
          {
               skill_name: "React Native",
               Image: native,
               width: 70,
               height: 70,
          },
          {
               skill_name: "Android",
               Image: "https://img.icons8.com/?size=256&id=04OFrkjznvcd&format=png",
               width: 70,
               height: 70,
          },

          {
               skill_name: "Java",
               Image: "https://img.icons8.com/?size=64&id=FRRACRKRsw2s&format=png",
               width: 70,
               height: 70,
          },

          {
               skill_name: "Mongo db",
               Image: Mongo,
               width: 40,
               height: 40,
          },
          {
               skill_name: "Docker",
               Image: Docker,
               width: 70,
               height: 70,
          },

          {
               skill_name: "Postman ",
               Image: "https://img.icons8.com/?size=80&id=IoYmHUxgvrFB&format=png",
               width: 50,
               height: 50,
          }, {
               skill_name: "Tailwind Css",
               Image: Tailwind,
               width: 80,
               height: 80,
          },
          {
               skill_name: "Material UI",
               Image: Material,
               width: 80,
               height: 80,
          }, {
               skill_name: "Fire base",
               Image:firebase,
               width: 55,
               height: 55,
          },
          {
               skill_name: "Postger SQL",
               Image:Postgres ,
               width: 70,
               height: 70,
          },
          {
               skill_name: "My SQL",
               Image:MySql,
               width: 70,
               height: 70,
          },
          {
               skill_name: "Prisma",
               Image:prisma,
               width: 70,
               height: 70,
          },
          {
               skill_name: "Graphql",
               Image: Graph,
               width: 80,
               height: 80,
          },

     ];
     const Ai = [
          {
               skill_name: "Ai",
               Image: "https://www.svgrepo.com/show/486520/ai.svg",
               width: 80,
               height: 80,
          }, {
               skill_name: "Ml",
               Image: "data:image/png;base64,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",
               width: 70,
               height: 70,
          }, {
               skill_name: "Python",
               Image: "https://img.icons8.com/?size=256&id=uLDrtp8o8zTG&format=png",
               width: 80,
               height: 80,
          }, {
               skill_name: "flask",
               Image: "https://img.icons8.com/?size=256&id=ewGOClUtmFX4&format=png",
               width: 80,
               height: 80,
          }, {
               skill_name: "Django",
               Image: "https://img.icons8.com/?size=256&id=qc3TyHJPxEoH&format=png",
               width: 80,
               height: 80,
          }, {
               skill_name: "Tensor flow",
               Image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/173px-Tensorflow_logo.svg.png?20170429160244",
               width: 80,
               height: 80,
          }, {
               skill_name: "Keras",
               Image: "https://icon.icepanel.io/Technology/svg/Keras.svg",
               width: 80,
               height: 80,
          },
          {
               skill_name: "DL",
               Image: "https://cdn-icons-png.flaticon.com/512/2103/2103832.png",
               width: 80,
               height: 80,
          },
          {
               skill_name: "Tauri",
               Image: Tauri,
               width: 70,
               height: 70,
          },
          {
               skill_name: "Docker",
               Image: Docker,
               width: 70,
               height: 70,
          },
     ]
     const D = [
          {
               skill_name: "Figma",
               Image: Figma,
               width: 50,
               height: 50,
          },
          {
               skill_name: "PhotoShop",
               Image: "https://img.icons8.com/?size=256&id=13677&format=png",
               width: 85,
               height: 85,
          },
          
          {
               skill_name: "Adobe",
               Image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Adobe_Illustrator_Icon_%28CS6%29.svg/768px-Adobe_Illustrator_Icon_%28CS6%29.svg.png?20200625113839",
               width: 70,
               height: 70,
          },
     ]
     return (
          <section
               id="skills"
               className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20 z-50"
               style={{ transform: "scale(0.9" }}
          >
               <SkillText />
               <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                    {Skill_data.map((image, index) => (
                         <SkillDataProvider
                              key={index}
                              src={image.Image}
                              width={image.width}
                              height={image.height}
                              index={index}
                         />
                    ))}
               </div>
               <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                    {Android.map((image, index) => (
                         <SkillDataProvider
                              key={index}
                              src={image.Image}
                              width={image.width}
                              height={image.height}
                              index={index}
                         />
                    ))}
               </div>
               <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                    {Ai.map((image, index) => (
                         <SkillDataProvider
                              key={index}
                              src={image.Image}
                              width={image.width}
                              height={image.height}
                              index={index}
                         />
                    ))}
               </div>
               <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                    {D.map((image, index) => (
                         <SkillDataProvider
                              key={index}
                              src={image.Image}
                              width={image.width}
                              height={image.height}
                              index={index}
                         />
                    ))}
               </div>
          </section>
     )
}

export default Skills