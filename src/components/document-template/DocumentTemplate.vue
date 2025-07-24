<script setup lang="ts">
import type { ResumeFormData } from "~/types/resumeFormData";
import DocumentHeaderSection from "~/components/document-template/DocumentHeaderSection.vue";
import DocumentPersonalInformation from "~/components/document-template/DocumentPersonalInformation.vue";
import DocumentEducationSection from "~/components/document-template/DocumentEducationSection.vue";
import DocumentWorkExperienceSection from "~/components/document-template/DocumentWorkExperienceSection.vue";
import DocumentFamilyMembersSection from "~/components/document-template/DocumentFamilyMembersSection.vue";
import DocumentGeneralInformationSection from "~/components/document-template/DocumentGeneralInformationSection.vue";
import { jsPDF } from "jspdf";

// jsPDF options are now defined inline where used
const resumeFormData = ref<ResumeFormData>();

const saveToPdf = async (data: ResumeFormData): Promise<void> => {
  resumeFormData.value = data;
  await nextTick();

  const element = document.getElementById("resume-template");
  if (!element) {
    console.error("Element not found");
    return;
  }

  const jsPdf = new jsPDF({
    orientation: "portrait",
    format: "a4",
    unit: "mm",
    compress: true,
    putOnlyUsedFonts: true,
  });

  jsPdf.setFont("Times New Roman");

  const debugElement: HTMLElement | null = document.querySelector("#debug");

  if (!debugElement) {
    console.error("Debug element not found");
    return;
  }

  // A4 size is 210mm × 297mm
  jsPdf.html(element, {
    callback: function (doc: jsPDF) {
      doc.save("Test.pdf");
    },
    margin: [20, 20, 20, 20],
    width: 170, // 210mm - 40mm margins
    windowWidth: 794, // A4 width in pixels at 96 DPI
    // autoPaging: "text",

    html2canvas: {
      logging: false,
    },
  });
};

const print = (data: ResumeFormData) => {
  resumeFormData.value = data;

  // TODO: print
  nextTick(() => {
    window.print();
  });
};

const saveDocx = (data: ResumeFormData) => {
  resumeFormData.value = data;

  // TODO: save to docx
};

defineExpose({ saveToPdf, print, saveDocx });
</script>

<template>
  <div id="debug">
    <div>Hello world</div>
    <div>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi nulla quod
      molestiae in ad accusantium deserunt assumenda. Excepturi cupiditate
      voluptatum reiciendis hic, rerum asperiores ratione maxime cumque, earum
      perspiciatis dolor? Sed molestias rem deleniti porro minima quam, ea,
      aliquid, ullam ab nam vel dolore! Cum veritatis fuga, laudantium
      distinctio ducimus dolorum mollitia. Adipisci laborum iusto rerum vitae
      voluptate officiis omnis! Ipsam tempora voluptas repellendus amet,
      quibusdam iste est velit beatae quam temporibus in ipsa id eius fuga,
      quis, magnam voluptatum labore provident. Sed sit voluptatibus eum quia
      porro! Distinctio, molestias? Aut molestiae autem facilis eos odio
      perspiciatis repellendus quidem error fugiat, ratione dolorem eveniet
      dolores iste totam quisquam ad quasi at. Voluptatum exercitationem in
      recusandae corporis obcaecati repellendus nostrum ad! Tempora, dolores
      dolore repudiandae adipisci obcaecati incidunt quasi optio saepe, voluptas
      doloremque est impedit, libero animi. Quos eum nemo, aut voluptas
      voluptatum optio doloribus cum fugiat voluptatem amet deleniti omnis?
      Commodi veniam rem at deleniti sint aut, ratione vel reiciendis earum ea
      voluptatum numquam possimus ullam velit. Eum minima ab quod labore saepe,
      repellat laboriosam, repellendus hic tenetur totam iure? Nam doloremque ea
      repudiandae laboriosam, eligendi alias suscipit esse perspiciatis
      repellendus quis, amet ipsum tempore rerum, nemo eaque voluptatibus
      blanditiis qui harum cum voluptas reprehenderit quaerat molestias. Illo,
      explicabo vero. Eius ipsum assumenda accusantium nisi, sed illum, dolorem
      tenetur velit sapiente dolores nulla cum aliquid vero veniam cumque
      inventore modi impedit quas facere molestias? Impedit consequatur officiis
      natus fugit quae? Dicta voluptas repellat modi quam libero. Sunt tenetur
      porro maiores corporis suscipit culpa? Minus voluptatem dolores expedita,
      molestias reiciendis at praesentium rerum! Necessitatibus, rem in
      dignissimos sint nesciunt ab culpa! Officia deserunt ab quibusdam aliquam,
      ipsum, iste doloremque, voluptatibus exercitationem libero quaerat quia.
      Facere corporis nam laborum deleniti ratione id esse, eveniet ad nulla quo
      impedit, iure distinctio alias ea! Iure velit architecto, incidunt
      inventore illum doloribus repellat optio! Aliquid atque vitae quas
      delectus, officiis enim repellat nihil illum aut nam consequatur ab,
      facilis soluta distinctio. Sed nihil voluptas aliquam. Eaque voluptatum
      nulla totam odit enim animi officia dolor. Ad alias aperiam illo. Commodi
      tempore a esse quis expedita quidem earum? Totam rerum nihil in
      consequatur distinctio est exercitationem facilis! Perferendis consectetur
      accusantium numquam ex natus consequuntur saepe. Voluptate nobis
      necessitatibus provident placeat ratione asperiores praesentium, magnam
      culpa ipsa corporis velit minima, fugit soluta iste itaque consectetur,
      incidunt amet nemo. Odio exercitationem illum animi at molestiae,
      veritatis nostrum adipisci dicta accusamus vero repellat modi autem
      inventore quo quibusdam voluptatibus assumenda, tempora architecto nulla
      necessitatibus ex soluta dolorum, atque error? Rerum? Est minima commodi
      culpa, id nesciunt, magnam veniam dolorem quae repellat ipsa eligendi
      laudantium incidunt sunt dolor aliquid, ex soluta voluptates saepe quis
      dicta maxime quam officia. Beatae, nemo obcaecati. Ut eveniet harum ullam,
      optio quidem cum aliquid nemo voluptatum sapiente repudiandae repellendus,
      corrupti delectus. Pariatur molestias, nesciunt aut iste doloribus,
      quibusdam fugit beatae quae, laudantium consequuntur eveniet nobis
      suscipit. Tempora neque perspiciatis minima corporis eius reiciendis, a
      repellat illum laborum ea eligendi necessitatibus voluptatum modi! Quae,
      quibusdam. Culpa laborum perferendis optio officia qui harum provident
      tempora fugit atque. Aperiam! Minus quis temporibus quod quidem assumenda
      itaque fugit beatae ex, neque dolore, rerum ab nesciunt voluptatem
      perferendis alias! Aliquam soluta asperiores veritatis voluptatibus, iure
      dolorum officia molestias minima itaque officiis? Quos aliquam ad officiis
      ea tempora? Veniam, quas enim quia quibusdam tenetur magnam soluta
      deserunt illo harum hic. Repellendus iusto error laborum recusandae
      aliquid illo quia? Praesentium animi reprehenderit mollitia? Culpa
      eveniet, omnis iusto ducimus earum dolore, minima animi voluptates ullam
      odit quaerat hic suscipit ab placeat veniam! Aut dolorum laudantium iste
      cum quam ratione unde nihil dolor praesentium illo! Commodi, iusto
      laborum? Quis dolor ab tempora aliquid. Explicabo exercitationem facere
      neque nulla esse soluta quibusdam voluptatum aut maxime dolorum. In
      explicabo rerum voluptates officia saepe ratione neque, amet quae! Odio
      soluta placeat maxime sit blanditiis error, numquam porro quod in
      consequatur iure totam ut. Ipsam cumque minus asperiores deleniti aliquam
      neque adipisci, esse alias ratione ea ab quae quaerat. Facere nemo
      accusantium quis iusto quia non ex cumque dolore dolorem, qui atque
      molestias vitae itaque voluptatum! Minus nostrum vel eveniet velit
      consequatur sapiente repellat adipisci optio illo odio! Placeat.
      Cupiditate, qui nihil quis culpa fugiat corporis minus eaque maiores eius
      quia sit laudantium reiciendis asperiores id porro? Temporibus dolore odit
      harum odio error blanditiis saepe asperiores et nisi accusantium. Harum
      dignissimos velit labore alias voluptate ex at delectus quisquam, vel a
      saepe officiis, numquam, placeat repudiandae culpa dolorum sapiente nulla
      fugit ipsam vitae voluptates. Doloribus doloremque odio excepturi
      distinctio. Perferendis corporis error delectus alias suscipit accusamus
      quaerat nostrum repellat, ad, possimus necessitatibus expedita sapiente
      asperiores inventore cum, fuga eaque obcaecati distinctio laboriosam
      commodi itaque a recusandae sed. Aut, aperiam! Natus consectetur,
      laudantium eum laborum doloremque corrupti delectus ut iusto aliquid
      perferendis? Voluptatibus tempora dolorem, illum dolor saepe quo
      blanditiis, provident quis cupiditate inventore iure laborum magni, nihil
      culpa ut. Nam ullam repellat ex quae quisquam. Voluptate deleniti magnam
      nobis, corrupti nisi molestiae nihil quod veritatis iure unde aperiam
      sapiente tempore totam est earum quaerat labore. Voluptatem laborum
      repellendus repellat! Dolorum inventore, ipsa maiores necessitatibus modi
      vero error tempora quo repellat incidunt excepturi quisquam, numquam
      reprehenderit dolore aliquam voluptate? Doloremque, soluta quidem dicta
      iure nobis quos quo? Sint, qui ducimus. Veniam perspiciatis voluptatem,
      magni enim rerum laudantium eligendi voluptas quisquam cupiditate
      voluptate sunt odio dolorem quam sit ratione at numquam? Ipsum aspernatur,
      quibusdam reprehenderit eaque inventore amet cum illo impedit. Enim
      quaerat cumque unde doloremque iure nobis voluptates ullam vero, ex
      distinctio, incidunt quam reprehenderit sed recusandae eius deserunt
      consequuntur accusantium nisi adipisci! Ex, est fugiat? Sint corrupti
      veniam sed! Consequuntur ratione asperiores velit soluta nesciunt hic
      nulla ea eaque sed possimus modi fuga, aliquid itaque obcaecati, ipsam
      libero voluptates fugit rerum dignissimos a mollitia atque nisi eius. Ea,
      ducimus! Nemo debitis, repellat saepe molestias, veniam voluptates minus
      labore sit adipisci, nisi dicta! Sequi commodi quis dicta iure nostrum.
      Quis, quam doloribus ducimus quos consequuntur iste rem nesciunt sed
      adipisci. Quam, nemo unde. Amet perferendis, ea totam officia ipsam quis
      porro recusandae accusamus dicta, nemo qui sequi nisi quia, eos in
      distinctio. Nemo eum magni numquam modi temporibus, cumque inventore! Odit
      nam natus omnis enim reprehenderit, iure assumenda distinctio voluptas,
      animi ducimus inventore quidem vero. Harum eius consequatur voluptates
      veritatis molestias vero quibusdam ex, laboriosam voluptatem unde aliquid
      quos ipsam! Quis officiis eum quae qui animi enim, quibusdam quos, ratione
      iste nemo est nisi quisquam fuga delectus possimus iure veniam distinctio
      at, pariatur architecto dignissimos ipsam eligendi? Doloremque, quo quam!
      Explicabo repellendus nobis et quis sunt earum alias incidunt pariatur aut
      quidem ipsum architecto ad illo excepturi soluta, omnis ab iusto ipsam
      ipsa, ratione dicta facere minima nemo voluptatibus? Rem! Culpa et commodi
      beatae saepe, nemo repudiandae iste minima facere, libero enim magnam ea
      quia ducimus ratione perferendis minus modi dicta ab dolorem molestias
      quidem labore officia. Quidem, exercitationem ea! Quibusdam maiores
      ducimus ipsum tenetur repellendus voluptas sunt asperiores earum deserunt
      placeat nihil temporibus quam saepe laboriosam beatae illum commodi nulla,
      quis tempora corrupti! Quo fuga necessitatibus similique deleniti
      suscipit? Quas repudiandae, neque expedita numquam dignissimos eaque dolor
      vel assumenda similique maiores, praesentium porro est quos doloribus
      minus fuga iure optio nisi corporis modi quasi mollitia quod. Doloribus,
      assumenda! Adipisci. Incidunt consequatur provident esse earum, id nam,
      facilis, voluptatibus numquam ut quidem eum sequi cupiditate veniam fugit
      consectetur nulla adipisci. Esse, provident et. Iste minus tenetur ea unde
      accusamus! Facere! Qui error provident odit, doloremque sit, unde cumque
      ratione voluptatum deserunt modi praesentium totam cupiditate rem magnam
      vero consequatur facilis? Quae quas sint tenetur aut consequatur eligendi
      quis earum repudiandae. Repellat molestias, eum incidunt voluptatum
      commodi at deserunt quasi, sequi nobis magnam porro dolorum? Dolorem
      labore cum ratione tempora magni? Eveniet provident consequatur rerum vel
      alias neque libero id velit. Sit, illo quos laborum repellendus possimus
      quae ratione esse quod necessitatibus saepe! Vel, aliquam reiciendis
      recusandae ex incidunt cum ut necessitatibus iure labore facilis ab culpa
      tenetur quis adipisci facere! Ducimus, mollitia placeat expedita natus
      fugiat consectetur vitae tenetur cumque repudiandae, consequuntur iure
      veniam magni ut, voluptates ea hic odit? Deserunt veniam ea corporis magni
      vero libero dolorum ipsam cumque! Autem consequuntur natus pariatur amet?
      Temporibus magni porro quas reprehenderit! Atque quia quae, illo iure
      beatae minima similique ipsum ea nostrum perspiciatis fuga expedita
      quibusdam esse dolores consequatur laudantium repellendus. Quas
      praesentium sit quo placeat odit ab quis, obcaecati sint ipsa, sapiente
      inventore. Odit asperiores ea totam nisi possimus iure ducimus hic, magnam
      facere. Fuga assumenda quam debitis nisi nesciunt. Odio, fugiat. Molestiae
      placeat qui aut ab adipisci sint dignissimos assumenda harum esse,
      incidunt, vero magni officia deserunt et perspiciatis voluptatem ut
      asperiores. Hic optio mollitia minima atque soluta quod! Numquam
      architecto laborum aspernatur odio blanditiis molestiae velit aut eius
      perferendis ex dolorem, repellendus accusantium voluptatibus libero facere
      tempore nobis facilis in rem molestias sit amet impedit enim? Illo, cum?
      Quidem ipsa autem adipisci ea eius error vero quibusdam, exercitationem,
      dolorum aliquid porro tempore est necessitatibus repellat magnam, alias
      quas a nostrum culpa natus omnis voluptate! Assumenda hic et enim!
      Explicabo at hic dolorem quos illum quibusdam est magni repellat. Sit quo
      ipsum quidem, excepturi consequatur quisquam et error accusamus laborum
      odit nesciunt tenetur deleniti tempore officiis saepe officia recusandae!
      Esse excepturi culpa corrupti! Voluptatum, necessitatibus. Eaque,
      dignissimos. Aliquid inventore repudiandae exercitationem, id nam repellat
      dolorum tempora ducimus quas quis repellendus cupiditate earum harum
      minima dolorem sapiente excepturi doloribus accusantium? Veritatis natus
      ratione voluptatem iusto quidem, facere corrupti deleniti dolores! Maiores
      praesentium nostrum, iure vel sapiente, odio eius consectetur adipisci
      minus, in quos repellat eaque id eligendi illum! Nihil, magnam. Eum eaque
      voluptas, itaque pariatur et nihil facilis voluptatem corporis repellendus
      quod dolorem magni blanditiis, voluptates sed porro possimus odit suscipit
      repudiandae modi. Fuga totam sapiente optio omnis, eaque obcaecati. Vel
      sed odit quo enim a iure accusamus dolores quod, eos fuga deserunt?
      Provident nam cum cupiditate quia, amet explicabo earum corporis aliquid a
      alias debitis. Pariatur fuga fugiat aut? Ratione, maxime atque ipsam quae
      quidem mollitia voluptas? Explicabo, architecto odit odio consectetur
      aliquam natus neque eligendi aperiam, maiores iste nisi laboriosam ea
      praesentium dicta fugiat placeat consequatur veniam laudantium? Voluptates
      accusamus facere blanditiis id assumenda nostrum dolore quidem quae animi
      rerum, dignissimos libero ipsam nihil modi. Voluptas modi, pariatur
      aspernatur asperiores repellat unde sunt aliquam? Rem itaque saepe libero.
      Asperiores harum inventore velit aspernatur. Quibusdam explicabo inventore
      neque harum exercitationem minima aspernatur voluptas fuga, deserunt,
      veniam voluptates error! Molestias nesciunt fugit atque dolore quis
      quaerat facere inventore exercitationem quos? Quisquam laudantium
      voluptatibus impedit officia dicta nihil ullam quia corrupti? Amet dolorum
      corporis quos. Ex magnam excepturi et suscipit, saepe ratione sapiente
      iste eligendi, aliquam harum totam iusto ducimus ea! Facere nemo voluptas
      dicta alias enim sint, maxime nostrum dolorem fugit cum placeat velit?
      Natus odit blanditiis, provident deleniti temporibus distinctio sapiente
      eos cumque. Animi eius laudantium possimus in velit. Sit vel rem fuga hic
      porro corporis earum voluptatum omnis optio accusantium deleniti, a
      assumenda nostrum minima asperiores dolores quasi exercitationem, eveniet
      tempore eum impedit iste quod quia? Reprehenderit, quo? Harum ea quam
      error magni vitae ab quae eius voluptates accusamus quo architecto, sit
      excepturi officiis veniam voluptatem unde itaque nostrum ad, dolorum
      corrupti similique, consequatur ratione? Animi, cupiditate neque.
      Voluptatibus dolore, beatae consequatur fugiat magni ut, molestias
      corrupti eos quos velit unde cupiditate at nobis! Quo nihil excepturi
      debitis impedit unde vitae quas odio optio accusamus iste. Voluptatem,
      dolorum. Eaque sapiente deserunt perspiciatis neque expedita eius
      voluptates molestiae alias accusantium, vel quisquam esse odio, est vero
      distinctio veritatis libero quis aperiam sint ut ipsa, dignissimos culpa!
      Quod, blanditiis laborum. Nostrum itaque, odit corporis maxime
      exercitationem facere voluptate debitis blanditiis et aperiam officiis
      praesentium incidunt deserunt distinctio sapiente sint earum. Voluptatum
      cum culpa pariatur ipsa autem reiciendis ipsum fugit architecto. Est
      nesciunt voluptates maiores sunt, vitae accusantium et voluptatem earum
      repellendus esse, consequuntur sapiente blanditiis quia porro molestiae
      veritatis alias velit, ratione perspiciatis. Necessitatibus nostrum amet
      expedita optio modi minus? Dolorum, facilis sunt minus totam libero
      voluptate doloremque repellendus necessitatibus, qui dicta culpa sed
      dolores. Ex distinctio eveniet quis. Facilis dolores distinctio corporis
      ex! Quibusdam, beatae earum? Blanditiis, consequatur ex. Distinctio in
      eligendi quae suscipit sit, officia, impedit id, natus numquam ex
      explicabo. Quis illo, omnis culpa quidem ratione voluptate ea, eaque amet
      dolorem, aperiam quo vel. Cupiditate, minus aspernatur. Nam iste nostrum
      quam rem distinctio mollitia repellat omnis deserunt incidunt error sunt
      ad vel recusandae numquam iusto, officiis asperiores sequi vero quia
      dignissimos, voluptatibus minima? Magni tempore ipsa molestiae. Sunt
      facere doloremque quaerat, voluptates voluptas, quo suscipit fugiat magnam
      delectus libero asperiores nulla mollitia aliquid. Magnam iure libero
      ullam delectus, veritatis obcaecati consequatur aperiam corrupti sunt
      facere nemo odio. Velit minima perferendis repudiandae, quis saepe sunt
      suscipit ipsam! Iusto voluptatum delectus, unde neque, provident a soluta
      ab expedita voluptate tenetur recusandae nostrum quos dicta animi numquam
      commodi magni! Voluptates? Enim laborum ratione beatae quos architecto
      natus nobis ipsa fugit? Est quia corrupti accusamus vel in doloremque eum
      inventore qui. Nam officia natus voluptatem quo non quos optio eos earum.
      Minus delectus molestias, velit reprehenderit odit facere distinctio ipsum
      magnam eveniet? Magnam odit repudiandae recusandae fugiat, quam placeat!
      Eligendi hic deserunt minus ut rem dolorem nulla quam error incidunt
      atque! Aut quod deserunt tempore id eligendi optio sed accusantium
      excepturi delectus ipsum non culpa numquam, consequuntur sit porro commodi
      repellendus ab in dolorum ut possimus doloribus exercitationem neque!
      Laboriosam, magni? Tempore sequi quos expedita excepturi aperiam incidunt
      magnam fugiat ullam numquam porro sint, perferendis nemo tenetur dolore.
      Deleniti nisi culpa tempora, blanditiis ex nesciunt explicabo? Quod hic
      exercitationem in officiis. Aliquid repellat ullam, odit dignissimos
      ratione voluptatum! Aliquid cum reprehenderit ipsum, sapiente esse minima
      atque. Iste molestias aperiam quaerat pariatur illo eum repellat facilis
      odio, omnis perspiciatis id maiores aliquid? Neque minima deserunt laborum
      animi. Animi cum dicta deleniti provident, voluptatibus explicabo esse
      ducimus? Consequuntur aut sit et est aliquid reiciendis ut adipisci harum,
      pariatur obcaecati at ab, consectetur saepe! Repellendus enim tenetur
      dolorem fugiat iusto ullam, repellat nihil accusamus beatae dignissimos
      dolor natus placeat non aut ad veniam libero fugit quo sequi rerum alias
      tempore velit modi nisi? Sit! Ipsum perspiciatis aut eum blanditiis
      ducimus facilis distinctio? Quisquam provident fugit sunt architecto quis
      nihil voluptates inventore perspiciatis, vel neque illum maiores hic
      doloribus nam sed accusantium, ipsa id saepe. Atque ab voluptatum nobis
      molestias unde amet sed ipsa earum, ratione, illum doloremque deserunt!
      Deleniti repudiandae optio architecto, possimus eos libero harum illo
      impedit totam est sed eligendi, ipsum quia? Sit unde voluptatibus et
      minima facere ipsum magnam reiciendis, ut sapiente. Voluptas doloremque
      illo quidem, doloribus consequatur eveniet explicabo impedit corporis
      saepe mollitia suscipit, architecto aperiam? Quidem provident error unde.
      Nostrum architecto eaque, quod est ipsa neque fuga maiores provident sint
      repellat earum, rem nihil ab debitis, et qui. Nobis similique incidunt
      minima molestiae beatae atque sequi suscipit voluptatem quia. Perspiciatis
      explicabo labore accusamus tempore sapiente. Amet, culpa! Delectus,
      dolorum est neque nemo minus, velit unde, ad odio cumque ipsam magni
      molestias consequatur fugit! Iusto sunt magni repellat ullam deleniti.
      Excepturi neque animi deserunt repellendus eum ab vero expedita, doloribus
      quam velit deleniti, sed saepe nihil fugit nobis molestias impedit illum
      tempora dolores odit praesentium sit ipsum! Pariatur, dolores nemo?
      Molestiae tenetur labore mollitia. Ex distinctio dolor nemo vitae quasi
      dicta at blanditiis facere, error harum id, assumenda iusto magnam sequi
      mollitia deserunt tempore, explicabo quae. Aliquid non illo explicabo.
      Neque accusantium ipsum totam voluptate tempora provident officia vitae.
      At tempora unde reprehenderit fuga atque necessitatibus adipisci.
      Perspiciatis dolorem, fuga ad non, voluptatem temporibus debitis quisquam
      aperiam alias, molestias tempora. Sed animi voluptates modi non culpa
      rerum nihil ratione ab est, distinctio aperiam laudantium ad eveniet
      ducimus earum necessitatibus dolor veniam reprehenderit molestiae
      consectetur repellat doloribus mollitia consequatur? Illo, debitis.
      Aperiam, officia? Illo harum maxime labore aliquam rerum odio consequatur
      necessitatibus doloribus quia voluptatem perspiciatis magni consequuntur
      quod, deserunt sed eligendi doloremque quisquam esse possimus officia
      natus a saepe? Fugiat? Sunt laudantium quo veniam, iure inventore ab dolor
      distinctio ex dolorem nostrum enim natus doloribus sit dicta assumenda
      iste illum eos dolorum nihil porro. Laudantium quam aut est unde dolore.
      Dignissimos accusamus modi itaque quo! Aliquam, tempora eveniet commodi
      eaque facilis quaerat dolore veniam veritatis numquam expedita totam
      sapiente, iusto perspiciatis optio sint excepturi nostrum modi ullam.
      Deleniti, minus harum? Impedit minima ipsum unde maxime? Numquam nobis
      maiores ullam eum minus enim repellendus fugiat placeat? Odit at tempore,
      corrupti consequatur nostrum aliquam obcaecati ea, cum harum dolor
      repellat eaque consectetur! Iste earum sequi rem consectetur id
      consequatur vero nemo eveniet. Illo molestiae harum obcaecati illum
      assumenda dignissimos deserunt rem alias, modi, laudantium dolores
      asperiores cupiditate fuga delectus aliquam reprehenderit accusantium!
      Voluptatibus rerum odio eligendi dolor perferendis porro reprehenderit
      nisi, in magnam officia saepe aut quia vero quas cupiditate doloribus
      laudantium fugit nihil similique odit beatae. In consequuntur harum non!
      Maxime. Porro tenetur quidem laboriosam eos assumenda deserunt quia
      eligendi eveniet quod, ut labore earum architecto. Beatae at, aspernatur
      eaque est, voluptatem tenetur iusto magni ea recusandae repellat quisquam,
      aliquam sapiente. Quam delectus quod officiis, voluptatem corporis nemo
      repellat eius numquam vel repudiandae totam vitae nesciunt voluptate sit
      ab soluta consequatur voluptatibus, quaerat molestias et. Earum amet
      consequatur illum voluptatibus eligendi. Alias distinctio maiores
      cupiditate quod, tempore ea doloribus repellendus similique nam corrupti
      vero dolorum nobis ex illo quia eveniet deserunt earum. Atque iure maxime
      eius iusto at magni eaque nesciunt. Doloribus explicabo fugit, quisquam
      perferendis suscipit, quidem impedit minus eaque a totam sunt veritatis!
      Reprehenderit assumenda animi eaque ipsam, odit soluta laborum magni
      praesentium dolores quis iure aspernatur minus maxime! Officia repellat
      quo, sit eaque nam neque, dolore dolor at quas beatae dolorum ipsum
      nostrum mollitia exercitationem explicabo qui? Dolore id vitae repellat
      quidem laborum suscipit recusandae est voluptatem enim. Fugiat autem
      cupiditate ut obcaecati doloremque, eum optio officia facere quia debitis
      reiciendis blanditiis recusandae et distinctio magnam laboriosam quaerat,
      minima in fugit? Iste suscipit quaerat minus, sequi ea temporibus. Aliquam
      iste dignissimos temporibus dolores nostrum architecto ipsam dolorum qui
      nulla nobis doloremque voluptates officiis alias numquam cupiditate
      ducimus, non, repellendus tenetur velit quo nisi dolore. Eligendi
      similique quibusdam consequatur.
    </div>
  </div>
  <div
    id="resume-template"
    class="w-[210mm] min-h-[297mm] mx-auto bg-white shadow-lg p-[25mm] box-border"
  >
    <div v-if="resumeFormData" class="max-w-[160mm] mx-auto">
      <!-- Header Section -->
      <div class="resume-section">
        <DocumentHeaderSection :resume-form-data="resumeFormData" />
      </div>
      <!-- Personal Information -->
      <div class="resume-section">
        <DocumentPersonalInformation :resume-form-data="resumeFormData" />
      </div>

      <!-- Education Section -->
      <div class="resume-section">
        <DocumentEducationSection :resume-form-data="resumeFormData" />
      </div>

      <!-- Work Experience Section -->
      <div class="resume-section">
        <DocumentWorkExperienceSection :resume-form-data="resumeFormData" />
      </div>

      <!-- Family Members Section -->
      <div class="resume-section">
        <DocumentFamilyMembersSection :resume-form-data="resumeFormData" />
      </div>

      <!-- Additional Information Section -->
      <div class="resume-section">
        <DocumentGeneralInformationSection :resume-form-data="resumeFormData" />
      </div>

      <!-- Program Skills Section -->
      <div class="resume-section">
        <DocumentProgramSkillsSection :resume-form-data="resumeFormData" />
      </div>

      <!-- Ranking Section -->
      <div class="resume-section">
        <DocumentRankingSection :resume-form-data="resumeFormData" />
      </div>

      <!-- Signature Field -->
      <div class="flex justify-between">
        <DocumentSignatureField />
        <DocumentSignatureField />
      </div>
    </div>
  </div>
</template>

<style>
#debug {
  font-size: 14pt;
}

/* TODO: remove
 @page {
  size: A4;
  margin: 40mm !important;
  font-size: 40mm !important;
  * {
    font-size: 40mm !important;
  }
} */

/* Only keep print-specific styles here
@media print {
  .resume-container {
    box-shadow: none;
    padding: 0;
    width: 100%;
    min-height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
  }
}
  */
</style>
