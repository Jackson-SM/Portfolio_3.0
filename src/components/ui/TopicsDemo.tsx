import { Topics } from "@/components/ui/Topics";
import { cn } from "@/lib/utils";
import { Step } from "../atoms/Step";

export function TopicsDemo() {
  const data = [
    {
      title: "Sobre mim",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-2xl font-normal mb-8">
            Minha Jornada
          </p>
          <div className="flex flex-col gap-5">
            <p className="text-xs md:text-lg">
              Aos 13 anos, eu era apenas um adolescente curioso, fascinado pelo
              que acontecia por trás das telas dos jogos que eu amava. Decidi
              mergulhar no mundo da programação, começando com PHP, e logo
              depois descobri Lua. Minha motivação era simples: eu queria criar
              mods para os jogos que jogava, dando a eles um toque pessoal.
              Naquela época, sem saber muito sobre documentação ou as melhores
              práticas, minha abordagem era instintiva — tentativa e erro, dia
              após dia. A internet foi minha maior aliada, com fóruns, tutoriais
              e comunidades online que me ajudaram a dar os primeiros passos.
            </p>
            <p className="text-xs md:text-lg">
              Uma lembrança especial que carrego dessa época é o incentivo
              divertido do meu irmão, que dizia que para ser o melhor
              programador, era preciso conhecer todas as linguagens de
              programação do mundo. Claro, hoje eu sei que dominar todas as
              linguagens não é o caminho, mas essa ideia me inspirou a explorar
              e aprender continuamente, sem medo de errar ou recomeçar. Com o
              tempo, essa curiosidade infantil se transformou em uma paixão
              séria, e fui me aperfeiçoando nas tecnologias que encontrei ao
              longo do caminho.
            </p>
            <p className="text-xs md:text-lg">
              Hoje, me sinto confiante em lidar com PHP, Javascript (incluindo
              TypeScript e Node) e C#. Além disso, desenvolvi uma sólida
              compreensão de frameworks como NestJS, AdonisJS, ReactJS, NextJS e
              VueJS. Minha jornada também me levou a entender e aplicar padrões
              de codificação, como SOLID, e explorar conceitos mais complexos
              como Domain-Driven Design (DDD) em alguns projetos. Ainda me
              considero um iniciante em muitos aspectos, pois o campo da
              tecnologia está sempre em movimento, mas meu desejo de aprender e
              evoluir permanece tão forte quanto naquela época em que comecei.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Valores E Filosofia",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-2xl font-normal mb-8">
            Os Princípios que Guiam Meu Caminho
          </p>
          <div className="flex flex-col gap-4">
            <p className="text-sm md:text-lg">
              <MarkPhrase>Empatia</MarkPhrase>,{" "}
              <MarkPhrase>liberdade</MarkPhrase> e{" "}
              <MarkPhrase>justiça</MarkPhrase> são os princípios que moldam
              tanto minha vida pessoal quanto profissional. Para mim, a empatia
              é o alicerce de qualquer solução eficaz — acredito firmemente que
              entender as necessidades e perspectivas dos outros é a chave para
              criar tecnologias que realmente façam a diferença. Colocar-se no
              lugar do outro, seja um colega de trabalho, um usuário ou um
              cliente, é um exercício diário que pratico com intenção.
            </p>
            <p className="text-sm md:text-lg">
              A <MarkPhrase>liberdade</MarkPhrase> é outro valor que considero
              essencial. A liberdade de criar, experimentar e inovar é o que me
              impulsiona a cada novo projeto. Essa liberdade me permite explorar
              diferentes abordagens e encontrar soluções criativas para
              problemas complexos. Para mim, o processo de programação é uma
              forma de expressão, onde cada linha de código é uma pequena peça
              de um quebra-cabeça maior.
            </p>
            <p className="text-sm md:text-lg">
              A <MarkPhrase>justiça</MarkPhrase>, por sua vez, é o que guia
              minhas escolhas e interações. Acredito que o ambiente de trabalho
              deve ser justo e inclusivo, onde todos têm a oportunidade de
              crescer e contribuir. Na vida, tento aplicar esse valor em todas
              as minhas decisões, buscando sempre o equilíbrio e a integridade
              em tudo o que faço.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Objetivos",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-2xl font-normal mb-8">
            Visões e Metas para o Futuro
          </p>
          <div className="flex flex-col gap-4">
            <p className="text-sm md:text-lg">
              Na minha jornada profissional, meu principal objetivo é continuar
              evoluindo como desenvolvedor full stack. Estou sempre em busca de
              novas oportunidades para expandir minhas habilidades, seja
              aprendendo uma nova linguagem, explorando um novo framework ou
              aprimorando meu entendimento de conceitos já conhecidos. Quero me
              tornar um desenvolvedor versátil e completo, capaz de enfrentar
              desafios em diferentes áreas do desenvolvimento de software.
            </p>
            <p className="text-sm md:text-lg">
              Além disso, busco um equilíbrio saudável entre o crescimento
              profissional e o desenvolvimento pessoal. Acredito que o
              autoconhecimento e o equilíbrio entre trabalho e vida pessoal são
              essenciais para uma carreira longa e gratificante. Por isso,
              dedico tempo para refletir sobre minhas metas e ajustar meu curso
              conforme necessário, garantindo que estou sempre caminhando na
              direção certa.
            </p>
            <p className="text-sm md:text-lg">
              Tenho também um desejo de criar algo que combine tecnologia e
              criatividade de uma forma única — um projeto que não apenas
              resolva um problema, mas que também inspire e desafie tanto a mim
              quanto aos outros. Esse é o tipo de realização que procuro, algo
              que me motive a sair da zona de conforto e explorar novas
              possibilidades.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Interesses",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-2xl font-normal mb-4">
            Interesses que Alimentam Minha Criatividade
          </p>
          <div className="flex flex-col gap-3 mb-8">
            <Step title="Musica" />
            <Step title="Tecnologia" />
            <Step title="Livros" />
            <Step title="Filosofia" />
            <Step title="Astronomia" />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-sm md:text-lg">
              Sou uma pessoa de interesses variados, e essa diversidade reflete
              meu desejo constante de aprender e explorar o mundo ao meu redor.
              No campo musical, aprecio uma ampla gama de estilos, desde sons
              mais clássicos até ritmos modernos, sempre em busca de algo que
              toque a alma ou me inspire de alguma forma. Música, para mim, é
              uma fonte de energia e inspiração, capaz de transformar qualquer
              momento.
            </p>
            <p className="text-sm md:text-lg">
              Minha paixão pela leitura também é uma parte fundamental da minha
              vida. Tenho um interesse especial por livros que me fazem
              refletir, especialmente aqueles focados em filosofia. Esses textos
              não apenas me proporcionam novas perspectivas, mas também me
              ajudam a entender melhor o mundo e meu papel nele. A filosofia,
              com suas questões profundas e atemporais, me atrai por seu poder
              de instigar o pensamento crítico e a introspecção.
            </p>
            <p className="text-sm md:text-lg">
              No campo da tecnologia, além da programação, tenho uma curiosidade
              crescente por hardware. Gosto de entender como as coisas funcionam
              &quot;debaixo do capô&quot;, explorando a mecânica e a eletrônica
              que dão vida aos dispositivos que usamos diariamente. Essa paixão
              me levou a passar horas desmontando e montando computadores,
              aprendendo a cada nova experiência.
            </p>
            <p className="text-sm md:text-lg">
              Mais recentemente, meu interesse se voltou para as estrelas. A
              astronomia me fascina, e estou ansioso para adquirir um telescópio
              e começar a explorar o universo por conta própria. A vastidão do
              cosmos e as perguntas sem resposta que ele suscita são uma fonte
              de inspiração e humildade, e mal posso esperar para começar essa
              nova jornada de exploração.
            </p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Topics data={data} />
    </div>
  );
}

type MarkPhrase = React.ComponentProps<"span">;

export const MarkPhrase = ({ children, className, ...props }: MarkPhrase) => {
  return (
    <span className={cn("text-primary-foreground", className)} {...props}>
      {children}
    </span>
  );
};
