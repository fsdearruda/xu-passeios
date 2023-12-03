const reviewSection = document.querySelector("div#reviews");

const reviews = [
  {
    name: "Manny",
    url: "/assets/viagens/Manny-Thailand.png",
    location: "Bangkok, Tailandia",
    review: "",
  },
  {
    name: "Mofi",
    url: "/assets/viagens/selfie-mexico.jpg",
    location: "Tinum, México",
    review: "",
  },
  {
    name: "felicio bonviver",
    url: "/assets/viagens/xuscow.jpg",
    location: "Moscou, Rússia",
    review:
      "graças ao xu passeios realizei um sonho antigo de visitar o beco q fica proximo a catedral de saint basil. Um local muito badalado entre felinos amantes da musica folklorica russa. Xu passeios facilita sua viagem e te da itinerarios uteis e divertidos pra voce e seus amigos ou quem sabe seu gatinho wink wink",
  },
  {
    name: "Xu",
    url: "/assets/viagens/xurio.jpg",
    location: "Rio de Janeiro, Brasil",
    review: "",
  },
];

reviews.forEach(review => {
  const reviewCard = document.createElement("div");
  if (reviewSection.childElementCount % 2 === 0) {
    reviewCard.classList.add("flex", "items-center", "gap-5", "bg-[#00000044]", "p-3", "rounded-md");
  } else {
    reviewCard.classList.add("flex", "flex-row-reverse", "items-center", "gap-5", "bg-[#00000044]", "p-3", "rounded-md", "text-end");
  }

  const imageClass = "select-none rounded-full object-cover h-[380px] w-[390px]";

  // Essa imagem do rio tem uma resolução diferente, então precisamos de um tratamento especial
  const isRio = review.name === "Whiskerella";

  const divRioClass = "min-h-[380px] min-w-[390px] h-[380px] w-[390px] select-none";
  const imageRioClass = "select-none rounded-full object-cover object-bottom h-full w-full";

  reviewCard.innerHTML = `

    ${isRio ? `<div class="${divRioClass}">` : ""}    
        <img id="bonkable" src="${review.url}" class="${isRio ? imageRioClass : imageClass}" alt="Foto de ${review.name} em ${review.location}">
    ${isRio ? `</div>` : ""}    
    <div>
        <div>
            <span class="font-bold">${review.name}</span>
            <span>@${review.location}</span>
            <p>${review.review}</p>
        </div>
    </div>
    `;

  reviewSection.appendChild(reviewCard);
});
