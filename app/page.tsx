import Image from "next/image";
import Navbar from "./components/navbar";

export default function Home() {

  return (
    <>
      <Navbar />
      <section id="inicio" className="relative h-[650px] flex lg:w-full w-auto">
        {/* Background image */}
        <Image
          src="/background.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority={true} // Define a prioridade do carregamento
          className="z-[-1]" // Coloca a imagem atrás do conteúdo
        />
        <div className="flex flex-col md:px-28 px-2 md:items-start 2xl:items-start 2xl:mx-0 md:justify-center xl:justify-center xl:items-center lg:mx-auto items-center justify-center space-y-10">
          <h1 className="text-white md:text-5xl 2xl:text-5xl 2xl:text-left text-center text-[34px] md:text-center 2xl:leading-relaxed">
            <span className="font-bold text-[#FF5F01]">Tijolo Baiano e Estrutural de Qualidade! </span>
            <br />
            Entrega Rápida e Qualidade Imbatível!
          </h1>
          <p className="text-white md:w-full w-80 2xl:w-full md:text-lg text-base 2xl:text-left md:text-center text-center">
            <span className="font-bold">Tijolo Baiano, Tijolo Estrutural, Tijolo de Barro </span> e muito mais: Tudo em Primeira Linha.
            <br />
            Garantimos Logística Rápida, Controle de Qualidade e um Atendimento Pós-Venda
            <br />
            Premium para Manter sua Obra Sempre no Caminho do Sucesso!
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5519997741685&text=Ol%C3%A1.%20vim%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20tijolos!"
            target="_blank"
            className="relative overflow-hidden bg-[#16B500] text-white md:mx-auto 2xl:mx-0 xl:mx-auto z-10 px-4 py-4 text-xl text-center font-bold rounded-md transition-colors duration-300 gap-4 flex items-center justify-center group w-64"
          >
            Tenho interesse
            <span className="absolute right-4 transform translate-x-0 opacity-0 transition-all z-10 duration-300 group-hover:translate-x-2 group-hover:opacity-100">
              →
            </span>
            <span className="absolute inset-0 bg-[#FF5F01] -z-10 w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
          </a>
        </div>
      </section>

      <section className="flex flex-col items-center py-20 gap-y-10">
        <h2 className="lg:text-[42px] text-3xl font-medium text-center w-[350px] lg:w-[560px]">
          Estamos Prontos para Atender suas Necessidades de <span className="text-[#FF5F01]">Construção ou Reforma</span>
        </h2>
        <p className="text-center text-xl lg:w-[900px] w-[350px]">Nossa equipe está preparada para suprir as necessidades do seu projeto, seja ele um grande depósito industrial ou uma construção residencial. Trabalhamos com marcas renomadas, garantindo a integridade dos tijolos até sua obra, reduzindo ao máximo possíveis danos durante o transporte.</p>
        <Image
          src="/tijolo.png"
          alt="Tijolo"
          width={224}
          height={448}
        />
        <h2 className="lg:text-[42px] text-3xl font-medium text-center w-[350px] lg:w-[1020px]">
          Atendemos todo o estado de <span className="text-[#FF5F01]">São Paulo</span>
        </h2>
        <a
          href="https://api.whatsapp.com/send?phone=5519997741685&text=Ol%C3%A1.%20vim%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20tijolos!"
          target="_blank"
          className="relative overflow-hidden bg-[#16B500] text-white md:mx-auto 2xl:mx-0 xl:mx-auto z-10 px-4 py-4 text-xl text-center font-bold rounded-md transition-colors duration-300 gap-4 flex items-center justify-center group w-64"
        >
          Entre em Contato
          <span className="absolute right-4 transform translate-x-0 opacity-0 transition-all z-10 duration-300 group-hover:translate-x-2 group-hover:opacity-100">
            →
          </span>
          <span className="absolute inset-0 bg-[#FF5F01] -z-10 w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
        </a>
      </section>

      <section className="bg-white flex flex-col items-center py-10 gap-y-10">
        <h2 className="lg:text-[42px] text-3xl font-medium text-center lg:w-[560px] w-[350px]">
          Nossos Melhores <span className="text-[#FF5F01]">Produtos</span>
        </h2>
        <div className="border border-slate-950 mx-auto lg:w-[540px] w-[330px] flex lg:flex-row flex-col p-2 gap-x-10 items-center">
          <div className="w-[290px] space-y-10">
            <h2 className="text-3xl font-semibold">Tijolo Baiano</h2>
            <p className="font-medium">Versátil e resistente, o tijolo baiano é empregado na execução de paredes de alvenaria com vantagens. Entre esses benefícios está a economia financeira e de materiais, proporcionada pelas ranhuras ao redor das peças que aumentam a aderência da argamassa.</p>
          </div>
          <div className="w-[270px] flex justify-center">
            <Image
              src="/image 7.png"
              alt="Tijolo Baiano"
              width={180}
              height={200}
            />
          </div>
        </div>
        <div className="border border-slate-950 mx-auto lg:w-[540px] w-[330px] flex lg:flex-row flex-col p-2 gap-x-10 items-center">
          <div className="w-[290px] space-y-10">
            <h2 className="text-3xl font-semibold">Tijolo de Barro</h2>
            <p className="font-medium">Os tijolos de barro são capazes de suportar cargas consideráveis, têm bom desempenho em termos de isolamento térmico, possuem propriedades acústicas e são fabricados a partir de materiais naturais e renováveis.</p>
          </div>
          <div className="w-[270px] flex justify-center">
            <Image
              src="/image 8.png"
              alt="Tijolo de Barro"
              width={180}
              height={200}
            />
          </div>
        </div>
        <div className="border border-slate-950 mx-auto lg:w-[540px] w-[330px] flex lg:flex-row flex-col p-2 gap-x-10 items-center">
          <div className="w-[290px] space-y-10">
            <h2 className="text-3xl font-semibold">Tijolo Estrutural</h2>
            <p className="font-medium">O bloco estrutural é usado para preencher paredes, suportando o peso das mesmas, da laje e da cobertura. Tudo de maneira eficiente! O modelo de cerâmica é mais leve, contribuindo para uma movimentação mais facilitada e otimizada.</p>
          </div>
          <div className="w-[270px] flex justify-center">
            <Image
              src="/image 9.png"
              alt="Tijolo Estrutural"
              width={180}
              height={200}
            />
          </div>
        </div>
        <a
          href="https://api.whatsapp.com/send?phone=5519997741685&text=Ol%C3%A1.%20vim%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20tijolos!"
          target="_blank"
          className="relative overflow-hidden bg-[#16B500] text-white md:mx-auto 2xl:mx-0 xl:mx-auto z-10 px-4 py-4 text-xl text-center font-bold rounded-md transition-colors duration-300 gap-4 flex items-center justify-center group w-64"
        >
          Entre em Contato
          <span className="absolute right-4 transform translate-x-0 opacity-0 transition-all z-10 duration-300 group-hover:translate-x-2 group-hover:opacity-100">
            →
          </span>
          <span className="absolute inset-0 bg-[#FF5F01] -z-10 w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
        </a>
      </section>

      <section className="bg-[#FF701C] lg:w-full md:w-full w-full h-auto lg:px-28 md:px-10 px-4 flex lg:flex-row flex-col items-center py-10 justify-center lg:justify-between">
        <div className="flex flex-col gap-y-4">
          <p className="text-base text-[#1e1e1e] lg:w-full w-80">Nossos Clientes São Prioridade</p>
          <h2 className="text-white lg:text-[36px] text-4xl font-medium text-left">
            Você Encontra Somente na <span className="text-[#1e1e1e]">EP Tijolos</span>
          </h2>
          <p className="text-white lg:w-[600px] w-[250px]">Nosso objetivo é garantir que você tenha a melhor experiência possível. Desde o primeiro contato até depois da compra, estamos aqui para atendê-lo da melhor maneira possível. Sua satisfação é o que nos impulsiona a continuar melhorando.</p>
          <div className="flex xl:flex-row lg:flex-col md:flex-col flex-col my-4 gap-y-10">
            <div className="space-y-4">
              <h3 className="text-white font-semibold lg:text-2xl text-lg"> Personalização Total</h3>
              <p className="text-base lg:w-[420px] w-52 text-white">Atendimento dedicado para cada cliente, moldando-se às suas necessidades e desejos.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-white font-semibold lg:text-2xl text-lg"> Velocidade sem Compromisso</h3>
              <p className="text-base lg:w-[420px] w-52 text-white">Entregas relâmpago sem sacrificar a qualidade, garantindo que você tenha o que precisa quando precisa.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-white font-semibold lg:text-2xl text-lg"> Suporte Incansável</h3>
              <p className="text-base lg:w-[420px] w-52 text-white">Sempre ao seu alcance, prontos para resolver qualquer questão e garantir sua plena satisfação.</p>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/image 12.png"
            alt="Imagem caminhão com blocos"
            width={335}
            height={540}
          />
        </div>
      </section>

      <section className="lg:w-full md:w-full w-full h-auto lg:px-28 md:px-10 md:space-y-12 space-y-12 px-4 flex lg:flex-row flex-col items-center py-10 justify-center lg:justify-between">
        <div className="flex flex-col space-y-10">
          <p className="text-base text-[#FF701C] xl:w-full w-80 my-10">Tenhas as respostas para suas perguntas</p>
          <h2 className="text-4xl font-semibold w-full">Perguntas frequentes</h2>

          <div className="flex flex-col justify-start gap-y-2">
            <h2 className="text-xl font-bold">Qual o Prazo de Entrega?</h2>
            <p className="text-base md:w-[540px] w-[320px] text-left text-[#1e1e1e]">Prazo de Entrega de até 5 dias Úteis.</p>
          </div>
          <div className="flex flex-col justify-start gap-y-2">
            <h2 className="text-xl font-bold">Qual a Quantidade Mínima de Pedidos?</h2>
            <p className="text-base md:w-[720px] w-[320px] text-left text-[#1e1e1e]">A Quantidade Miníma de Pedidos é de 1000 Tijolos.</p>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="/construtor.png"
            alt="Construtor"
            width={373}
            height={365}
          />
        </div>
      </section>
      <a
        href="https://api.whatsapp.com/send?phone=5519997741685&text=Ol%C3%A1.%20vim%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20tijolos!"
        target="_blank"
        className="relative overflow-hidden bg-[#16B500] text-white mx-auto z-10 px-4 py-4 text-xl text-center font-bold rounded-md transition-colors duration-300 gap-4 flex items-center justify-center group w-64"
      >
        Entre em Contato
        <span className="absolute right-4 transform translate-x-0 opacity-0 transition-all z-10 duration-300 group-hover:translate-x-2 group-hover:opacity-100">
          →
        </span>
        <span className="absolute inset-0 bg-[#FF5F01] -z-10 w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
      </a>

      <section className="lg:w-full md:w-full w-full h-auto lg:px-28 md:px-10 md:space-y-12 space-y-12 px-4 flex flex-col lg:items-start items-center py-10 justify-center lg:justify-center">
        <div className="flex flex-col xl:space-y-10 space-y-4">
          <p className="text-base text-[#FF701C] xl:w-full w-80 my-10">Trabalhamos com a satisfação de nossos clientes</p>
          <h2 className="text-4xl font-semibold w-full">Produtos e Entregas de Qualidade = Cliente Feliz</h2>
        </div>
        <div className="grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 xl:grid justify-center items-center gap-x-36 space-y-10 lg:mx-0">
          <Image src="/dep1.png" alt="Construtor" width={420} height={400} />
          <Image src="/dep2.png" alt="Construtor" width={420} height={400} />
          <Image src="/dep3.png" alt="Construtor" width={420} height={400} />
          <Image src="/dep4.png" alt="Construtor" width={420} height={400} />
        </div>
      </section>

      <section id="contato" className="bg-[#FF701C] h-[380px] flex flex-col items-center max-w-[1140px] justify-center mx-auto mt-24 mb-20 gap-y-10 py-6 rounded-lg">
        <h2 className="text-white text-4xl font-bold text-center">Ainda ficou com alguma dúvida?</h2>
        <h3 className="text-white text-xl text-center">Clique no botão abaixo e entre em contato conosco</h3>
        <a
          href="https://api.whatsapp.com/send?phone=5519997741685&text=Ol%C3%A1.%20vim%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20tijolos!"
          target="_blank"
          className="relative overflow-hidden bg-[#16B500] text-white mx-auto z-10 px-4 py-4 text-xl text-center font-bold rounded-md transition-colors duration-300 gap-4 flex items-center justify-center group w-64"
        >
          Entre em Contato
          <span className="absolute right-4 transform translate-x-0 opacity-0 transition-all z-10 duration-300 group-hover:translate-x-2 group-hover:opacity-100">
            →
          </span>
        </a>
      </section>

      <section className="bg-[#FF701C] w-full h-auto gap-y-10 lg:px-28 md:px-10 px-4 flex lg:flex-row flex-col items-center py-10 justify-center lg:justify-between">
        <div className="flex flex-col gap-y-4">
          <img src="Logo_branca.png" className="w-fit" alt="Logo Ep Tijolos branca" />
          <p className="xl:w-[540px] w-[343px] text-white">Nós da EP Tijolos fornecemos uma qualidade inegualável em nossos produtos e serviços, fazemos de tudo para atender a sua demanda e entregar qualidade em primeiro lugar. Entre em contato conosco.</p>
          <div className="flex flex-row gap-x-10">
            <a href="https://www.instagram.com/eptijolos/" target="_blank">
              <img src="/instagram.svg" className="w-10" alt="Logo Instagram" />
            </a>
            <a href="https://www.facebook.com/p/EP-tijolos-100065088606627/" target="_blank">
              <img src="/facebook.svg" className="w-10" alt="Logo Facebook" />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start gap-y-4 lg:px-64 text-white">
          <h2 className="text-3xl font-semibold">Contato</h2>
          <a href="https://api.whatsapp.com/send?phone=5519997741685&text=Ol%C3%A1.%20vim%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20tijolos!" target="_blank" className="flex flex-row gap-x-2 hover:scale-125 duration-100">
            <img src="/tel.svg" alt="Logo de telefone" />
            <p className="text-xl">(19) 99774-1685</p>
          </a>
          <a href="https://www.google.com/maps/place/EP+Tijolos/@-23.0808071,-46.9507052,15z/data=!4m2!3m1!1s0x0:0xf3e43370b5062e33?sa=X&ved=1t:2428&ictx=111" target="_blank" className="flex flex-row gap-x-2 hover:scale-110 duration-150">
            <img src="/loc.svg" alt="  de telefone" />
            <p className="text-lg">R. Euríco Dutra, 93 - Jardim Niero, Louveira - SP, 13290-000</p>
          </a>
        </div>
      </section>

      <div className="bg-[#FF701C] w-full mx-auto text-center py-10">
        <p className="text-white text-xl">© 2024 EP Tijolos | Blocos de Excelência. Todos Direitos Reservados. Desenvolvido por <a href="www.constemarketing.com.br" target="_blank" className="text-[#1e1e1e] font-semibold hover:text-2xl duration-150">Conste Marketing.</a></p>
      </div>

      <div className="fixed xl:bottom-6 xl:right-24 2xl:right-10 bottom-4 right-10">
        <a
          aria-label="Tire suas dúvidas ou compre pelo whatsapp"
          target="_blank"
          href="https://api.whatsapp.com/send?phone=5519997741685&text=Ol%C3%A1.%20vim%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20tijolos!"
        >
          <button
            className="bg-[#16B500] hover:bg-[#1d5a17] hover:scale-110 duration-150 transition text-white py-3 px-3 rounded-full shadow-lg"
            aria-label="Whatsapp Flutuante"
          >
            <Image
              src="/whatsapp.svg"
              alt="Whatsapp flutuante"
              width={40}
              height={40}
            />
          </button>
        </a>
      </div>
    </>
  );
}
