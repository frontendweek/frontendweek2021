import styled from 'styled-components'

export const CodeOfConduct = () => (
  <Wrapper>
    <h1>Código de Conduta</h1>

    <p>Participantes, palestrantes, representantes de empresas e pessoas voluntárias da conferência precisam concordar com este código de conduta. A equipe organizadora vai reforçar que este código seja seguido durante todo o evento. Esperamos a cooperação de todas as partes para ajudar a garantir um ambiente seguro para qualquer pessoa.</p>

    <h2>Versão rápida</h2>

    <p>Nossa conferência é dedicada a fornecer uma experiência livre de assédio para todas as pessoas, independentemente do sexo, identidade de gênero e expressão, idade, orientação sexual, deficiência, aparência física, tamanho corporal, cor de pele, etnia, religião (ou falta dela) ou escolhas de tecnologias. Não toleramos o assédio a participantes da conferência, sob qualquer forma. Linguagem e imagens sexuais não são apropriadas em nenhum local, incluindo palestras, workshops, festas, Twitter e outras mídias on-line. Violações destas regras poderão causar expulsão da conferência, sem restituição, a critério da equipe organizadora.</p>

    <h2>Versão mais longa</h2>

    <p>Constituem assédio comentários verbais ofensivos relacionados a gênero, identidade de gênero e expressão, idade, orientação sexual, deficiência, aparência física, tamanho corporal, cor de pele, etnia, religião, escolhas de tecnologias, imagens sexuais em espaços públicos, intimidação deliberada, perseguição, stalking, fotografias ou filmagens constrangedoras, interrupção contínua das apresentações ou outros eventos, contato físico inadequado e atenção sexual indesejada.</p>

    <p>Participantes que receberem uma solicitação para interromper qualquer comportamento de assédio devem fazer isso imediatamente.</p>

    <p>As políticas antiassédio também se aplicam a representantes de empresas patrocinadoras. Em particular, não devem usar imagens, atividades ou outro material de cunho sexual. As equipes de estandes e tendas (incluindo pessoas voluntárias) não devem utilizar roupas, uniformes ou trajes sexualizados ou criar um ambiente sexualizado de quaisquer formas.</p>

    <p>Se alguém se envolver em comportamento de assédio, a equipe organizadora poderá tomar todas as medidas que considerar adequadas, incluindo avisar a pessoa ofensora ou expulsá-la da conferência sem nenhum reembolso.</p>

    <p>Caso sofra assédio, perceba que alguém esteja sofrendo assédio ou tenha alguma dúvida, entre em contato com alguém da organização imediatamente. As pessoas da equipe da conferência podem ser identificadas, pois estarão vestindo camisetas marcadas.</p>

    <p>A organização estará disposta a auxiliar participantes a entrar em contato com a segurança do hotel ou local, bem como aplicar a legislação pertinente, fornecer escoltas ou ajudar pessoas que sofrerem assédio para que se sintam seguras durante a conferência. Valorizamos sua participação.</p>

    <p>Esperamos que todas as pessoas participantes sigam estas regras em salas de apresentação e workshops da conferência, além de eventos sociais relacionados.</p>
  </Wrapper>
)

const Wrapper = styled.div`
  padding: 0 2em;

  h1 {
    font-size: 3.2rem;
    margin: 3.2rem 0;
  }

  h2 {
    font-size: 2.4rem;
    margin: 2.8rem 0;
  }

  p {
    font-size: 1.6rem;
    line-height: 1.5;
  }
`
