import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";

type FormInputs = {
    subject: string,
    email: string,
    message: string
}

export const Contact = () =>{

    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>()

    const onSubmit: SubmitHandler<FormInputs> = data => {
        emailjs.send(
            'service_31b4n5s',
            'template_hqpt5u7',
            {
                subject: data.subject,
                email: data.email,
                message: data.message
            },
            'V0tDGYVeHMXwJAK3T'
        )
    }

    return (
        <main>
            <h3 className="font-extrabold mb-4 text-3xl">Contact</h3>

            <p>Email: boubacarbakarycamara@esp.sn</p>

            <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    
                    <label className="block" htmlFor="subject">Sujet du mail</label>
                    <input {...register("subject")} className="border" type="text" name="subject" id="subject" placeholder="Quel est le sujet ?" />
                </div>
                
                <div className="mb-3">
                    <label className="block" htmlFor="email">Email</label>
                    <input {...register("email", {required: true})} className="border" type="email" name="email" id="email" placeholder="Votre email" />
                    {errors.email && <p className="text-[red]">Email requis</p>}
                </div>

                <div className="mb-3">
                    <label className="block" htmlFor="message">Message</label>
                    <textarea {...register("message")} rows={5} className="border resize-none" name="message" id="message" placeholder="Votre message" />
                </div>

                <input type="submit" className="block bg-[purple] text-[white] py-3 px-3 hover:bg-[gray]"/>
            </form>
        </main>
    )
}