import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'
import HText from "@/shared/HText";
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = ({ setSelectedPage }: Props) => {
    const inputStyles = `mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;
    const { register, trigger, formState: { errors } } = useForm();

    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }
    return (
        <section id="contactus" className="mx-auto w-5/6 pt-24 pb-22 md:h-full">
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
                {/* Header */}
                <motion.div className="md:w-3/5" initial="luk"
                    whileInView="chal"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        luk: { opacity: 0, x: -50 },
                        chal: { opacity: 1, x: 0 }
                    }}>
                    <HText><span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE</HText>
                    <p className="my-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio molestiae aliquid perspiciatis, nulla neque in voluptates fugit esse eveniet debitis?
                    </p>
                </motion.div>

                {/* Forms and Images */}
                <div className="mb-10 justify-between gap-8 md:flex">
                    <motion.div className="mt-10 basis-3/5 md:mt-0"
                        initial="luk"
                        whileInView="chal"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            luk: { opacity: 0, y: 50 },
                            chal: { opacity: 1, y: 0 }
                        }}>
                        <form target="_blank"
                            onSubmit={onSubmit}
                            method="POST"
                            action="https://formsubmit.co/7e3ad80d57a86f76b8340ac75d6f93b4"
                        >
                            {/* Name field */}
                            <input className={`${inputStyles}`
                            } type="text" placeholder="NAME"
                                {...register("name", { required: true, maxLength: 100 })}
                            />
                            {errors.name && (
                                <p className="m-1 text-primary-500">
                                    {errors.name.type === "required" && "This field is required"}
                                    {errors.name.type === "maxLength" && "Max length is 100 characters"}

                                </p>
                            )}
                            {/* Email field*/}
                            <input className={`${inputStyles}`
                            } type="text" placeholder="EMAIL"
                                {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, })}
                            />
                            {errors.email && (
                                <p className="m-1 text-primary-500">
                                    {errors.email.type === "required" && "This field is required"}
                                    {errors.email.type === "pattern" && "Invalid email address"}

                                </p>
                            )}
                            {/* Message field*/}
                            <textarea className={`${inputStyles}`}
                                rows={4} cols={50} placeholder="MESSAGE"
                                {...register("message", { required: true, maxLength: 2000 })}
                            />
                            {errors.message && (
                                <p className="m-1 text-primary-500">
                                    {errors.message.type === "required" && "This field is required"}
                                    {errors.message.type === "maxLength" && "Max length is 2000 characters"}

                                </p>
                            )}
                            <button type="submit" className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white">
                                SUBMIT
                            </button>
                        </form>
                    </motion.div>

                    <motion.div className="relative mt-16 basis-2/5 md:mt-0"
                        initial="luk"
                        whileInView="chal"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            luk: { opacity: 0, y: 50 },
                            chal: { opacity: 1, y: 0 }
                        }}>

                        <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                            <img src={ContactUsPageGraphic} alt="contact-us-page-graphic" className="w-full" />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default ContactUs