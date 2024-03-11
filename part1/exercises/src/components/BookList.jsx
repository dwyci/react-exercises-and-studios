export default function BookList() {
   let pageTitle = "The Top Three Newly Released Books!";
   let book1 = "The Midlife Cyclist";
   let book2 = "What the Dog Saw";
   let book3 = "Fake Work";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={"https://m.media-amazon.com/images/I/41Z4ON-UZIL._SY445_SX342_.jpg"} alt="The Midlife Cyclist" />
         <img src={"https://m.media-amazon.com/images/I/41GAaJtCuSL._SX342_SY445_.jpg"} alt="What the Dog Saw" />
         <img src={"https://m.media-amazon.com/images/I/41EvfUrKsJL._SY445_SX342_.jpg"} alt="Fake Work" />
      </div>      
   );
}