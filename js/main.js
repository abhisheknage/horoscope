const zodiacArray = [];

zodiacArray.push({
  sign: "Aries",
  startDate: new Date("2000-02-21".split("-")),
  endDate: new Date("2000-03-19".split("-")),
  description:
    "You may not be sure what to think today, Aries. Mental confusion could be the day's theme for you, but don't let it get you down. Realize that it's just one of those days when none of the pieces fit right. The truth is that they do fit somewhere, just not now. Lay low and wait for this phase to pass. Things will pick up soon as the fog lifts and you can see clearly again.",
});
zodiacArray.push({
  sign: "Taurus",
  startDate: new Date("2000-04-20".split("-")),
  endDate: new Date("2000-05-20".split("-")),
  description:
    "Spiritual concerns are a bigger issue for you today, Taurus. You may have found that you're drawn to a fanciful mindset and unorthodox way of viewing the world. Pursue this realm of thought and trust that your intuition knows exactly where to take you. Emotional tension may run high, so try not to get down on other people's \"me first\" attitude.",
});
zodiacArray.push({
  sign: "Gemini",
  startDate: new Date("2000-05-21".split("-")),
  endDate: new Date("2000-06-20".split("-")),
  description:
    "Does it seem like your life is pulling apart at the seams, Gemini? Perhaps it's time to reevaluate. Major aspects of your being could be coming into question and you can't seem to find the answer to why you started down this road in the first place. Have confidence in yourself and your incredible ability to cut to the core of every matter. This is just a phase and you're able to work through it.",
});
zodiacArray.push({
  sign: "Cancer",
  startDate: new Date("2000-06-21".split("-")),
  endDate: new Date("2000-07-22".split("-")),
  description:
    "There's an extra bit of fire in your words and emotions today, Cancer. Your sensitivity is heightened and you should consider doing some sort of volunteer work now. You may talk about saving the world, but talk will get you nowhere until you put those ideas into practice. Take part in the lives of people who are less fortunate and seek the truth in all the issues you encounter.",
});
zodiacArray.push({
  sign: "Leo",
  startDate: new Date("2000-07-23".split("-")),
  endDate: new Date("2000-08-22".split("-")),
  description:
    "There may be serious challenges in your daily routine today, Leo. How can you organize your day more efficiently? Take time to set a plan into motion. Write it down. You may want to drift into another realm, so let those emotions roam free - just make sure you deal with your daily tasks first. This will give you more freedom to take advantage of the blast of creative power that you have now.",
});
zodiacArray.push({
  sign: "Virgo",
  startDate: new Date("2000-08-23".split("-")),
  endDate: new Date("2000-09-22".split("-")),
  description:
    "You may feel idealistic today, Virgo. This is fine, but make sure these ideals are rooted in reality or they may be nothing more than a pipe dream. Feel free to escape to another mindset, but make sure you can still discern what's real and what isn't. This is a formative time for you in which you realize that the conventional ways of doing things aren't working anymore. Spread the word.",
});
zodiacArray.push({
  sign: "Libra",
  startDate: new Date("2000-09-23".split("-")),
  endDate: new Date("2000-10-22".split("-")),
  description:
    "Your dreams and fantasies are more real than you know, Libra. Smile at the people you pass and watch them smile back. Your sensitive and fun-loving nature is infectious. Use it to help heal others' wounds. Laughter is the remedy that cures all. Be conscious of your tremendous effect on others and spread the beauty that lives inside you.",
});
zodiacArray.push({
  sign: "Scorpio",
  startDate: new Date("2000-10-23".split("-")),
  endDate: new Date("2000-11-21".split("-")),
  description:
    "Your sensitivity is especially heightened today, Scorpio. You're in tune with your emotions and more sensitive to your dreams. Realize the importance of friendship and show someone you care by initiating an outing or intimate dinner at your home. You have greater self-awareness, as well as the energy to get things done. Fantasy worlds may come to life if you let them. Watch out for overindulgence.",
});
zodiacArray.push({
  sign: "Sagittarius",
  startDate: new Date("2000-11-22".split("-")),
  endDate: new Date("2000-12-21".split("-")),
  description:
    "You may be going through a confusing period now, Sagittarius. Today's energy brings these issues into focus. Parts of your life seem to be slapping you in the face, indicating that a drastic life change is coming. Resist the urge to play the victim and let other people grab the reins simply because they act more confidently. This is your life and only you know what's best for you.",
});
zodiacArray.push({
  sign: "Capricorn",
  startDate: new Date("2000-12-22".split("-")),
  endDate: new Date("2001-01-19".split("-")),
  description:
    "Spiritual concerns and fanciful daydreams move into sharp focus today, Capricorn. Perhaps you're pulled by playful emotions and escapism. Keep one foot on the ground while you send your mind into the clouds, but definitely take time to check the air up there and report your findings to your conscious self. You may feel a greater sensitivity toward others now while your intuition is strong.",
});
zodiacArray.push({
  sign: "Aquarius",
  startDate: new Date("2001-01-20".split("-")),
  endDate: new Date("2001-02-18".split("-")),
  description:
    "Have you taken someone for granted lately? Today you should give them the thanks and attention they deserve, Aquarius. Your sensitivity and psychic awareness are especially strong. You aren't in the mood to put up with superficialities. Stick with what is real and say it like it is. Tension in your daily life may surface, but if you have things under control, you will ride through it just fine.",
});
zodiacArray.push({
  sign: "Pisces",
  startDate: new Date("2001-02-19".split("-")),
  endDate: new Date("2001-03-20".split("-")),
  description:
    "There may be some serious miscommunication today, so be honest in all your dealings, Pisces. Be as straightforward as possible, since issues can backfire if the truth is clouded. Honesty is invaluable and must be maintained at all times. You have the power to make a lasting impression on people. Curb your tendency to snap at others. Watch out for accidents involving fire or metal.",
});

// console.log(JSON.stringify(zodiacArray));

// document.querySelector("#submit").addEventListener();
document.querySelector("#submit").addEventListener("click", () => {
  console.log("Executing");
  let userBirthday = document.querySelector("#birthDate").value;
  console.log(userBirthday);
  userBirthday = new Date(userBirthday.split("-"));
  if ((userBirthday.getMonth() <= 2) & (userBirthday.getDate() <= 20)) {
    userBirthday = new Date(
      2001,
      userBirthday.getMonth(),
      userBirthday.getDate()
    );
  } else {
    userBirthday = new Date(
      2000,
      userBirthday.getMonth(),
      userBirthday.getDate()
    );
  }

  //   userBirthday = new Date(2000, userBirthday.getMonth(), userBirthday.getDay());
  console.log(userBirthday);
  let matchFound = false;
  let index = 0;
  while (matchFound === false) {
    console.log(zodiacArray[index]);
    console.log(`Month is ${userBirthday.getMonth()}`);
    console.log(`Day is ${userBirthday.getDate()}`);

    if (
      userBirthday >= zodiacArray[index].startDate &&
      userBirthday <= zodiacArray[index].endDate
    ) {
      matchFound = true;
      let returnOutput = `You are a ${zodiacArray[index].sign} \n ${zodiacArray[index].description}`;
      console.log(`Your sign is ${zodiacArray[index].sign}`);
      document.querySelector("#output").innerText = returnOutput;
    }
    index++;
  }
});
