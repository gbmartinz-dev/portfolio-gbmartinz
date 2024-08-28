import Image from "next/image"

export const HeroSection = () => {
    return (
        <section className="w-full h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end">
            <div className="container">
                <div>
                    <p>Olá, meu nome é </p>
                    <h2>Gabriel Martins</h2>

                    <p>Olá, meu nome é Gabriel Martins e sou um desenvolvedor front-end apaixonado por tecnologia. Com mais de 2 anos de experiência. Meu objetivo é criar interfaces de usuário bonitas e funcionais. Estou sempre aberto a novas oportunidades e desafios.</p>
                    <div>
                        techs
                    </div>

                    <div>
                        contato
                    </div>
                </div>

                <Image
                    width={320}
                    height={304}
                    src="/images/profile-gabrielMartins.png"
                    alt="Foto de perfil do Gabriel Martins" 
                />
            </div>
        </section>
    )
}