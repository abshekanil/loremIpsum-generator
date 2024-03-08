const text = [
    "The city streets were bustling with activity, as people hurried to and fro, their footsteps echoing off the buildings. Cars honked their horns impatiently, while cyclists weaved in and out of traffic. Despite the chaos, there was a sense of energy and excitement in the air, as if anything were possible.",
    "In the park, the sound of children's laughter filled the air, as they ran and played games with boundless energy. Parents watched indulgently, enjoying a moment of respite from the demands of everyday life. Dogs chased after balls and frisbees, their tails wagging happily as they enjoyed the freedom of the open space.",
    "At the market, vendors called out to passersby, hawking their wares with enthusiasm. The smell of fresh produce mingled with the scent of cooking food, creating an irresistible aroma that wafted through the air. People stopped to sample samples and chat with the vendors, their faces lit up with excitement.",
    "In the countryside, fields stretched out as far as the eye could see, their golden hues bathed in the warm glow of the afternoon sun. Farmers worked tirelessly, tending to their crops with care and precision. The sound of tractors hummed in the distance, as they plowed the fields in preparation for planting.",
    "In the mountains, hikers set out on trails that wound their way through breathtaking scenery. The air was crisp and fresh, invigorating the senses and filling the lungs with each deep breath. Wildlife rustled in the underbrush, adding an element of mystery to the rugged landscape.",
    "On the beach, the sound of waves crashing against the shore was both soothing and invigorating. Sunbathers lounged on towels, soaking up the warm rays of the sun, while children built sandcastles and splashed in the surf. Seagulls soared overhead, their cries mingling with the sound of laughter and conversation.",
    "In the desert, the heat was relentless, yet there was a stark beauty to the landscape that was impossible to ignore. Sand dunes stretched out as far as the eye could see, their ever-shifting shapes creating an otherworldly landscape that seemed to defy description. Despite the harsh conditions, life thrived in unexpected places, with cacti blooming brightly against the backdrop of the barren landscape.",
    "In the forest, the trees towered overhead, their branches swaying gently in the breeze. Shafts of sunlight filtered through the dense canopy, casting dappled shadows on the forest floor below. Birds flitted from branch to branch, their songs adding to the symphony of sounds that filled the air.",
    "In the city, skyscrapers reached towards the heavens, their sleek facades gleaming in the sunlight. The streets below were a hive of activity, as people hurried to work or leisurely strolled along the sidewalks. Neon lights flashed and music blared, creating a sensory overload that was both exhilarating and exhausting.",
    "At the lake, the water was calm and tranquil, reflecting the beauty of the surrounding landscape like a mirror. Fishermen cast their lines from the shore, their patience rewarded with the occasional tug on their lines. Families picnicked on the grassy banks, enjoying a moment of peace and serenity away from the hustle and bustle of everyday life."
  ];

  let generateBtn = document.querySelector('.generateBtn');
  let textDisplay = document.querySelector('.textDisplay');
  let input = document.getElementById('inputNum');
  let forms = document.querySelector('.forms');

  forms.addEventListener("submit", function(e){
    e.preventDefault();

    let value = parseInt(input.value);
    let random = Math.floor(Math.random() * text.length);

    if(isNaN(value) || value < 0 || value > 9 )
    {
        textDisplay.innerHTML = `<p class="textDisplay">${text[random]}</p>`;
    }
    else{
        let tempText = text.slice(0, value);
        tempText = tempText.map(function(item){
            return `<p class="textDisplay">${item}</p>`
        }).join("");
        textDisplay.innerHTML = tempText;
        
    }

    

    
  });