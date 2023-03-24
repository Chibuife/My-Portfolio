import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'
import { styles } from "../style"
import { EarthCanvas } from "./canvas"
import { SectionWapper } from "../hoc"
import { slideIn } from "../utils/motion"
import { useRef, useState } from "react"

const Contact = () => {
  const formRef = useRef();
  const [form, setFrom] = useState({
    name:'',
    email:'',
    message:'',
  })
  const [loading,setLoading] = useState(false)
  const handleChange = (e)=>{
     const {name, value} = e.target;
     setFrom({...form, [name]: value})
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    setLoading(true)
 
    emailjs.send('service_sngrqkp','template_6kf0r16',
    {from_nme:form.name,
    to_name: 'Chibuife',
    from_email:form.email,
    to_email:'chibuifejohn1@gmail.com',
    message: form.message
    },
    't_CRMna7NLO5WspVQ'
    )
    .then(()=>{
      setLoading(false);
      alert('Thank you. I will gat back to you as soon as possible.')
    })
    setFrom({
      name: '',
      email: '',
      message:''
    }), (error)=>{
      setLoading(false)
      console.log(error)
      alert('something went wrong')
    }
  }
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden "> 
      <motion.div
      variants={slideIn('left','tween',0.2,1)}
      className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-12 flex-col flex gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="What's your name?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea 
            rows='7'
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you what to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <button
          type="submit"
          className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading? 'Sending...': "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWapper(Contact, "contact")