const polls = [
  {
    id: 1,
    question: "¿Usted es mayor de edad?",
    answer: [
      {
        id: 1,
        response: "Si",
        nextquestion: 2,
        finished: false,
      },
      {
        id: 2,
        response: "No",
        nextquestion: 5,
        finished: false,
      },
    ],
  },
  {
    id: 2,
    question: "¿Podrá usted responder unas preguntas sobre nuestros vinos?",
    answer: [
      {
        id: 1,
        response: "Si",
        nextquestion: 3,
        finished: false,
      },
      {
        id: 2,
        response: "No",
        nextquestion: 0,
        finished: true,
        msg: "Ha dado por finalizada nuestra encuesta, gracias por su respuesta",
      },
    ],
  },
  {
    id: 3,
    question: "¿Cúal es el mejor vino?",
    answer: [
      {
        id: 1,
        response: "VINO MONTES LIMITED",
        nextquestion: 4,
        finished: false,
      },
      {
        id: 2,
        response: "VINO TARAPACA GRAN RESERVA",
        nextquestion: 4,
        finished: false,
      },
      {
        id: 2,
        response: "VINO 7 COLORES GRAN RESERVA",
        nextquestion: 4,
        finished: false,
      },
      {
        id: 2,
        response: "VINO SIEGEL GRAN RESERVA",
        nextquestion: 4,
        finished: false,
      },
    ],
  },
  {
    id: 4,
    question: "¿Con que acompañaría su compra?",
    answer: [
      {
        id: 1,
        response: "Quesos",
        nextquestion: 5,
        finished: false,
      },
      {
        id: 2,
        response: "Carnes Rojas",
        nextquestion: 5,
        finished: false,
      },
      {
        id: 2,
        response: "Mariscos",
        nextquestion: 5,
        finished: false,
      },
      {
        id: 2,
        response: "Alcachofas",
        nextquestion: 5,
        finished: false,
      },
      {
        id: 2,
        response: "Esparragos",
        nextquestion: 5,
        finished: false,
      },
      {
        id: 2,
        response: "Carnes Rojas",
        nextquestion: 5,
        finished: false,
      },
    ],
  },
  {
    id: 5,
    question: "Que producto prefiere más?",
    answer: [
      {
        id: 1,
        response: "Jugos",
        nextquestion: 6,
        finished: false,
      },
      {
        id: 2,
        response: "Agua saborisada",
        nextquestion: 7,
        finished: false,
      },
    ],
  },
  {
    id: 6,
    question: "¿De estos productos cúal es su favorito?",
    answer: [
      {
        id: 1,
        response: "Quesos",
        nextquestion: 7,
        finished: false,
      },
      {
        id: 2,
        response: "Carnes Rojas",
        nextquestion: 7,
        finished: false,
      },
      {
        id: 2,
        response: "Mariscos",
        nextquestion: 7,
        finished: false,
      },
      {
        id: 2,
        response: "Alcachofas",
        nextquestion: 7,
        finished: false,
      },
      {
        id: 2,
        response: "Esparragos",
        nextquestion: 7,
        finished: false,
      },
      {
        id: 2,
        response: "Carnes Rojas",
        nextquestion: 7,
        finished: false,
      },
    ],
  },
  {
    id: 7,
    question:
      "¿Compraría más seguido sí le damos un 30% en cada compra realizada?",
    answer: [
      {
        id: 1,
        response: "Si",
        nextquestion: 8,
        finished: false,
      },
      {
        id: 2,
        response: "No",
        nextquestion: 0,
        finished: true,
        msg: "Ha dado por finalizada nuestra encuesta, gracias por su respuesta",
      },
    ],
  },
  {
    id: 8,
    question: "¿Le parece que los vegetales son frescos?",
    answer: [
      {
        id: 1,
        response: "Si",
        nextquestion: 9,
        finished: false,
      },
      {
        id: 2,
        response: "No",
        nextquestion: 9,
        finished: false,
      },
    ],
  },
  {
    id: 9,
    question: "Cúales de los siguientes beneficio le gustaría tener?",
    answer: [
      {
        id: 1,
        response: "Despacho gratis",
        nextquestion: 10,
        finished: false,
      },
      {
        id: 2,
        response: "Trato preferencial",
        nextquestion: 10,
        finished: false,
        msg: "Ha dado por finalizada nuestra encuesta, gracias por su respuesta",
      },
    ],
  },
  {
    id: 10,
    question: "¿Nuestra plataforma web y movil le ha gustado?",
    answer: [
      {
        id: 1,
        response: "Si",
        nextquestion: 11,
        finished: false,
      },
      {
        id: 2,
        response: "No",
        nextquestion: 0,
        finished: true,
        msg: "Ha dado por finalizada nuestra encuesta, gracias por su respuesta",
      },
    ],
  },
  {
    id: 11,
    question: "¿Que tan probable es que recomiende nuestra plataforma?",
    answer: [
      {
        id: 1,
        response: "Muy probable",
        nextquestion: 12,
        finished: false,
      },
      {
        id: 2,
        response: "Lo pensaría",
        nextquestion: 12,
        finished: false,
      },
      {
        id: 3,
        response: "No la recomiendo",
        nextquestion: 12,
        finished: false,
      },
    ],
  },
  {
    id: 12,
    question: "¿Su pedido llegó a tiempo?",
    answer: [
      {
        id: 1,
        response: "Sí",
        nextquestion: 13,
        finished: false,
      },
      {
        id: 2,
        response: "No",
        nextquestion: 13,
        finished: false,
      },
    ],
  },
  {
    id: 13,
    question: "¿El repartidor entregó el pedido segun lo acordado?",
    answer: [
      {
        id: 1,
        response: "Si",
        nextquestion: 14,
        finished: false,
      },
      {
        id: 2,
        response: "No",
        nextquestion: 14,
        finished: false,
      },
    ],
  },
  {
    id: 14,
    question: "¿El repartidor fue amable?",
    answer: [
      {
        id: 1,
        response: "Si",
        nextquestion: 15,
        finished: false,
      },
      {
        id: 2,
        response: "No",
        nextquestion: 15,
        finished: false,
      },
    ],
  },
  {
    id: 15,
    question: "¿Sus productos llegarón completamente?",
    answer: [
      {
        id: 1,
        response: "Si",
        nextquestion: 16,
        finished: false,
      },
      {
        id: 2,
        response: "No",
        nextquestion: 16,
        finished: false,
      },
    ],
  },
  {
    id: 16,
    question:
      "¿El repartirdor se presento de menera educada y le llamó por su nombre?",
    answer: [
      {
        id: 1,
        response: "Si",
        nextquestion: 17,
        finished: false,
      },
      {
        id: 2,
        response: "No",
        nextquestion: 17,
        finished: false,
      },
    ],
  },
  {
    id: 17,
    question: "¿El repartidor le exigio propina?",
    answer: [
      {
        id: 1,
        response: "Si",
        nextquestion: 18,
        finished: false,
      },
      {
        id: 2,
        response: "No",
        nextquestion: 18,
        finished: false,
      },
    ],
  },
  {
    id: 18,
    question: "¿Le gustó el regalo que le hicimos en su compra?",
    answer: [
      {
        id: 1,
        response: "Si",
        nextquestion: 19,
        finished: false,
      },
      {
        id: 2,
        response: "No",
        nextquestion: 19,
        finished: false,
      },
    ],
  },
  {
    id: 19,
    question:
      "¿Sabía usted que la charcutería de la vaca lola tiene cabez y tiene cola?",
    answer: [
      {
        id: 1,
        response: "Si",
        nextquestion: 20,
        finished: false,
      },
      {
        id: 2,
        response: "No",
        nextquestion: 20,
        finished: false,
      },
    ],
  },
  {
    id: 20,
    question: "¿Sabía usted que la vaca lola hace muuuuuuu?",
    answer: [
      {
        id: 1,
        response: "Si",
        nextquestion: 100,
        finished: true,
        msg: "Gracias por responder nuestra encuesta",
      },
      {
        id: 2,
        response: "No",
        nextquestion: 100,
        finished: true,
        msg: "Gracias por responder nuestra encuesta",
      },
    ],
  },
];
