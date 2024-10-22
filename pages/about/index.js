import React, {useState} from 'react'
// icons

//  data
const aboutData = [
  {
    title: 'Habilidades',
    info: [
     {
      title: 'Habilidades',
      stage: 'Analista de Dados - Cientista de Dados - Business Inteligence - BI - Python - SQL - Java - Excel - Power BI - Dashboards - Indicadores - KPIs - Relatórios - CRM - ERP - gestão de Projetos.',
     },
     {
      title: 'Dev-Ops',
      stage: 'Google Cloud - AWS - Terraform - Kubernetes - Docker.',
     },
    ],
  },
  {
    title: 'Certificações',
    info: [
      {
        title: 'Curso de Python para Finanças: Análise de Dados e Machine Learning.'
      },
      {
        title: 'Curso de Business Intelligence com SQL Server'
      },
      {
        title: 'Curso de Cloud Computing - AWS, Google Cloud e Azure - Dados na nuvem.',
      },
      {
        title: 'Curso de Power BI Completo - Do Básico ao Avançado.',
      },
      {
        title: 'Curso de Analista de Implantação, Analista de Suporte e Analista Comercial ERP.',
      },
      {
        title: 'Curso de Excel do básico ao avançado.',
      },
    ],
  },
  {
    title: 'Experiências',
    info: [
      {
        title: 'Feelancer - Internet',
        stage: '2022 - 2024',
      },
      {
        title: ' Data Analyst',
        stage: '2023 - 2024',
      }, 
      {
        title: 'Analista de TI',
        stage: '2024',
      },
    ],
  },
];

import Avatar from '../../components/Avatar'
import Circles from '../../components/Circles'

import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

import CountUp from 'react-countup';


const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      <motion.div
        variants={fadeIn('right', 0.2)}
        intial = 'hidden'
        animate= 'show'
        exit = 'hidden'
        className='hidden xl:flex absolute bottom-0 -left-[460px]'>
          <Avatar />
     
      </motion.div>
  
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2
          variants={fadeIn('right', 0.4)} initial='hidden' animate='show' exit='hidden'
           className='h2'>
          Transformando Dados  
            <span className='text-accent'> Em Ideias.</span>
          </motion.h2>      
      {/* Subtitle */}
          <motion.p 
          variants={fadeIn('right', 0.4)} initial='hidden' animate='show' exit='hidden'
          className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
            Com uma paixão por transformar dados em insights valiosos, sou um especialista em análise de dados com domínio em Python, SQL, Power BI e Excel. Python me permite automatizar e analisar dados complexos, enquanto SQL é essencial para gerenciar grandes bancos de dados. Power BI transforma dados brutos em visualizações interativas, e Excel é indispensável para manipulação de dados e criação de planilhas detalhadas. Com essas ferramentas, estou sempre pronto para enfrentar novos desafios e elevar a análise de dados a um novo patamar! 
          </motion.p>
        </div>
        <motion.div
        variants={fadeIn('left', 0.4)} initial='hidden' animate='show' exit='hidden'
        className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item,itemIndex) =>{
              return (
                <div key={itemIndex}
                className ={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration/300'}
                cursor-pointer captalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:-left-0`}
                onClick={()=>setIndex(itemIndex)}>
                  {item.title}
                  
                </div>
              )
            })}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex)=>{
              return(
              <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 itms-center text-white/60'>
                <div className='font-light mb-2 md:mb-0'>{item.title} </div>
                <div className='hidden md:flex'>-</div>
                <div>{item.stage}</div>
                <div className='flex gap-x-4'>
                  {item.icons?.map((icon,itemIndex)=>{
                    return
                     <div className='text 2xl text-white'>{icon}</div>
                  })}
                </div>
              </div>
            );})}
          </div>
        </motion.div>
      </div>
    </div>
    );
};

export default About;
