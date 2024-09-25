import styles from "./Novedades.module.css";
import React from "react";
import edificios from "../assets/vecteezy_city-background-illustration-black_22227434.png";
import afip from "../assets/afip.png";

const Novedades = () => {
  return (
    <div className={styles.novedades_container}>
      <div className={styles.novedades}>
        <h1 className={styles.h1_title}>
          La AFIP reafirmó la imposibilidad de compensar Bienes Personales
        </h1>
        <img className={styles.afip} src={afip} alt="afip" />
        <p className={styles.p}>
          La AFIP reafirmó la imposibilidad de compensar Bienes Personales
          responsable sustituto con saldos a favor. <br /> RESOLUCION GENERAL (AFIP) N°
          3175 - BO 02/09/2011 <br /> A través de una resolución general, el Fisco
          aclara que los responsables por el cumplimiento de deuda ajena y los
          responsables sustitutos no podrán solicitar la compensación de sus
          obligaciones fiscales con saldos a favor. <br /> De esta manera, la AFIP se
          aparta totalmente del criterio afirmado por la Corte Suprema de
          Justicia de la Nación a través del fallo "Rectificaciones Rivadavia",
          en relación a la posibilidad de compensar el Impuesto sobre los Bienes
          Personales que como responsables sustitutos deben ingresar las
          sociedades, con saldos a favor. En dicho antecedente, la Procuradora
          Fiscal mencionó (argumento al que luego adhirió la mayorÃ­a del
          tribunal) que "todo tributo pagado en exceso por un contribuyente
          sigue siendo parte de su derecho de propiedad y, por ende, éste puede
          disponer de él para la cancelación de otras obligaciones tributarias o
          para su transferencia a terceros. Todo ello sujeto a una razonable
          reglamentación (arts. 14 y 28 de la Constitución Nacional) que, en el
          caso, está dada por los arts. 27, 28, 29 y ccdtes. de la ley 11.683". <br />
          Añadió que "el saldo acreedor pertenece a Rectificaciones Rivadavia
          S.A. como contribuyente en el impuesto al valor agregado y el deudor
          también le pertenece, como responsable del impuesto sobre los bienes
          personales —acciones o participaciones societarias—. Se verifica así
          la requerida identidad entre los sujetos tributarios, esto es, que el
          titular pasivo de la deuda impositiva sea, simultáneamente, el titular
          activo de un crédito contra el Fisco, sin que, por los fundamentos ya
          desarrollados en el párrafo anterior, resulte relevante que un caso lo
          sea como “responsable” y en el otro como “contribuyente”. <br /> Ahora bien,
          a través de esta nueva resolución general, la AFIP modifica la norma
          que reglamenta el instituto de la compensación, indicando que "los
          responsables por el cumplimiento de deuda ajena y los responsables
          sustitutos a que se refiere el Artículo 6° de la Ley N° 11.683, texto
          ordenado en 1998 y sus modificaciones, no podrán solicitar la
          compensacián a que alude la presente." <br /> Por lo tanto, estamos en
          presencia de una nueva resolución polémica, que estarí­a incurriendo
          en un exceso reglamentario, y que por lo tanto podrí­a ser declarada
          inconstitucional por la Justicia.
        </p>
      </div>
      <div className={styles.novedades2}>
        <h1>
        Que es el impuesto llamado coti?
        </h1>
        <br />
        <p className={styles.p}>
        El COTI es el "código de oferta de transferencia de inmuebles", el cual debe ser obtenido por el titular o condómino de bienes inmuebles con carácter previo a la ocurrencia de la negociación, oferta o transferencia de un bien inmueble o de derechos sobre bienes inmuebles a construir. <br /> Dicho código debe generarse cuando el precio consignado en cualquiera de los actos precedentes, la base imponible fijada a los efectos del pago de los impuestos inmobiliarios o el valor fiscal, resulte igual o superior a $ 300.000. <br />

Tratándose de la negociación, oferta o transferencia de una parte indivisa de un bien inmueble, la obligación de obtener el COTI se configurará cuando el precio consignado en cualquiera de dichos actos o los valores proporcionales correspondientes a la base imponible fijada a los efectos del pago de los impuestos inmobiliarios o tributos similares o el valor proporcional correspondiente al valor fiscal vigente del bien inmueble, resulten igual o superior a $300.000. <br />

El COTI no es un impuesto, es un codigo de transferencia de inmueble que te lo asigna la AFIP cuando vas a vender una propiedad. Lo que si es un impuesto es el ITI (Impuesto a la transferencia de inmueble), que lo deberá pagar la persona que vende la propiedad. Dicho valor es el 1,5% sobre el valor del inmueble (Valor de escritura). De todos modos se puede pedir una exencion del ITI, si es que la propiedad que se vende es tu única vivienda y te comprometes a adquirir otra propiedad o construir en el termino de un año posterior a la venta. 
        </p>
      </div>
      <img className={styles.edificios} src={edificios} alt="edificios" />
    </div>
  );
};

export default Novedades;
