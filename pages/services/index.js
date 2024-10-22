import ServiceSlider from '../../components/ServiceSlider'
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'

import { motion } from 'framer-motion';
import {fadeIn} from '../../variants'

const Services = () => {
  return (
  <div className='h-full bg-primary/30 py-36 flex items-center'>
    <Circles />
    <div className='container mx-auto'>
      <div className ='flex flex-col xl:flex-row gap-x-8'>
        <div>
          <motion.h2
          variants={fadeIn('up', 0.4)} initial='hidden' animate='show' exit='hidden'
           className='h2 xl:mt-8'>
          Meus 
            <span className='text-accent'> Serviços.</span>
          </motion.h2>
          <motion.p 
          variants={fadeIn('up', 0.3)} initial='hidden' animate='show' exit='hidden'
          className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
            Como analista de dados, ofereço serviços que transformam dados em insights valiosos. Com expertise em visualização de dados, modelagem preditiva e machine learning, ajudo empresas a tomar decisões estratégicas e resolver problemas complexos. Vamos impulsionar o sucesso do seu negócio através da análise de dados!          </motion.p>
        </div>
        <motion.div
        variants={fadeIn('down', 0.6)} initial='hidden' animate='show' exit='hidden'
        className='w-full xl:max-w-[65%]'>
          <ServiceSlider />
        </motion.div>
      </div>
    </div>
    <Bulb />
  </div>
  );
};

export default Services;
