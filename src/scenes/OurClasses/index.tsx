import { ClassType, SelectedPage } from '@/shared/types'
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import Class from './Class';
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const classes: ClassType[] = [
    {
        name: "Weight Training Classes",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
        image: image1
    },
    {
        name: "Yoga Classes",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
        image: image2
    },
    {
        name: "Ab Core Classes",
        image: image3
    },
    {
        name: "Adventure Classes",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
        image: image4
    },
    {
        name: "Fitness Classes",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
        image: image5
    },
    {
        name: "Training Classes",
        description: "",
        image: image6
    },
]

const OurClasses = ({ setSelectedPage }: Props) => {
    return (
        <section id='ourclasses' className='w-full bg-primary-100 py-40'>
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
                <motion.div className='mx-auto w-5/6'
                    initial="luk"
                    whileInView="chal"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        luk: { opacity: 0, x: -50 },
                        chal: { opacity: 1, x: 0 }
                    }}>
                    <div className='md:w-3/5'>
                        <HText>OUR CLASSES</HText>
                        <p className='text-sm py-5'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, expedita. Fugit aperiam ex ducimus quasi ipsam optio iusto explicabo officia porro totam labore cum id facere a tempore voluptas molestias, autem maxime exercitationem ipsa? Ullam!
                        </p>
                    </div>
                </motion.div>
                {/* Image of scroller */}
                <div className='mt-10 h-[350px] w-full overflow-x-auto overflow-y-hidden'>
                    <ul className='w-[2800px] whitespace-nowrap'>
                        {classes.map((item: ClassType, index) => (<Class key={index} name={item.name} description={item.description} image={item.image} />))}
                    </ul>
                </div>
            </motion.div>
        </section>
    )
}

export default OurClasses