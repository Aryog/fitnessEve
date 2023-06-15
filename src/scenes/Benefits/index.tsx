import HText from '@/shared/HText'
import { BenefitType, SelectedPage } from '@/shared/types'
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import Benefit from './Benefit'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const benefits: BenefitType[] = [
    {
        icon: <HomeModernIcon className='h-6 w-6' />,
        title: "State of the Art Facilities",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
    },
    {
        icon: <UserGroupIcon className='h-6 w-6' />,
        title: "100's of Diverse Classes",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
    },
    {
        icon: <AcademicCapIcon className='h-6 w-6' />,
        title: "Expert and Pro Trainers",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
    }
]
// making all the motion 0.2 sec delay
const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}
const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section id="benefits" className='mx-auto min-h-full w-5/6 py-20'>
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
                {/* Header */}
                <div className='md:my-5 md:w-3/5'>
                    <HText>MORE THAN JUST GYM.</HText>
                    <p className='my-5 text-sm'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus dicta minima obcaecati debitis ipsa sint,
                        quod ea praesentium illo deleniti ab tempora quidem laudantium non?Lorem ipsum dolor sit amet consectetur adipisicing elit. A, quaerat!
                    </p>
                </div>
                {/* Benefits */}
                <motion.div className=' mt-5 md:flex items-center justify-between gap-8'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    {benefits.map((benefit: BenefitType) => (
                        <Benefit key={benefit.title} icon={benefit.icon} title={benefit.title} description={benefit.description} setSelectedPage={setSelectedPage} />
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Benefits