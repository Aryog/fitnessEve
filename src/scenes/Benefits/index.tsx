import HText from '@/shared/HText'
import { BenefitType, SelectedPage } from '@/shared/types'
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import Benefit from './Benefit'
import ActionButton from '@/shared/ActionButton'
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'
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
                <motion.div className='md:my-5 md:w-3/5' initial="hidden" whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
                >
                    <HText>MORE THAN JUST GYM.</HText>
                    <p className='my-5 text-sm'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus dicta minima obcaecati debitis ipsa sint,
                        quod ea praesentium illo deleniti ab tempora quidem laudantium non?Lorem ipsum dolor sit amet consectetur adipisicing elit. A, quaerat!
                    </p>
                </motion.div>
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
                {/* Graphics and description */}
                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                    {/* Graphic */}
                    <img src={BenefitsPageGraphic} alt="benefits-page-graphic" className='mx-auto' />
                    {/* Description */}
                    <div>
                        {/* Title */}
                        <div className='relative'>
                            <div className='before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves'>
                                <motion.div initial="luk"
                                    whileInView="chal"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5 }}
                                    variants={{
                                        luk: { opacity: 0, x: 50 },
                                        chal: { opacity: 1, x: 0 }
                                    }}>
                                    <HText>
                                        MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                        <span className='text-primary-500'>FIT</span>
                                    </HText>
                                </motion.div>
                            </div>
                        </div>
                        {/* Description */}
                        <motion.div initial="luk"
                            whileInView="chal"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            variants={{
                                luk: { opacity: 0, x: -50 },
                                chal: { opacity: 1, x: 0 }
                            }}>
                            <p className='my-5'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam nemo illo tempore laborum excepturi maxime libero. Saepe asperiores suscipit corporis, et quas nisi obcaecati ad est a debitis ipsum dicta nihil quo vel voluptates.
                            </p>
                            <p className='mb-5'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam nemo illo tempore laborum excepturi maxime libero. Saepe asperiores suscipit corporis, et quas nisi obcaecati ad est a debitis ipsum dicta nihil quo vel voluptates.
                            </p>
                        </motion.div>
                        {/* Button */}
                        <div className='relative mt-16'>
                            <div className='before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles'>
                                <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                            </div>

                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Benefits