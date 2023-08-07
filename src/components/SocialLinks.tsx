import {FaYoutube, FaTwitter, FaDiscord } from 'react-icons/fa';

export const SocialLinks = () =>{
    return (
        <section className="mt-5">
            <h3 className="text-2xl font-extrabold">Mes reseaux sociaux</h3>
            <ul className="mt-5">
                <li className='flex items-center'><FaYoutube className='mr-2'/><a className="hover:text-[#33E7F2]" href="https://youtube.com/user/gravenilvectutos">Youtube</a></li>
                <li className='flex items-center'><FaTwitter className='mr-2'/><a className="hover:text-[#33E7F2]" href="https:twitter.com/gravenilvec">Twitter</a></li>
                <li className='flex items-center'><FaDiscord className='mr-2'/><a className="hover:text-[#33E7F2]" href="https://github.com/">Github</a></li>
            </ul>
        </section>
    );
}