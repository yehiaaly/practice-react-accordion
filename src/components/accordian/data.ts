interface AccordionItem {
  id: number;
  question: string;
  answer: string;
}
const data: AccordionItem[] = [
  {
    id: 1,
    question: "If a cyborg dreams, does it see in code or in colors?",
    answer:
      "Current theories suggest they dream in high-definition metaphors, though a few still report occasional '404 - Image Not Found' nightmares.",
  },
  {
    id: 2,
    question:
      "Why do we press harder on the remote control buttons when we know the batteries are dead?",
    answer:
      "Because humans believe that sheer willpower can occasionally bypass the laws of thermodynamics.",
  },
  {
    id: 3,
    question: "What happens if an unstoppable force meets an immovable object?",
    answer:
      "They usually realize they have a lot in common and grab a coffee to discuss the pressures of their respective roles.",
  },
  {
    id: 4,
    question:
      "How many parallel universes are currently out of sync with ours?",
    answer:
      "Exactly 4,012, though in at least half of them, you actually remembered where you put your car keys this morning.",
  },
  {
    id: 5,
    question:
      "If time travel is possible in the future, why haven't we seen any tourists yet?",
    answer:
      "Our current century is likely rated 'One Star' on the Chrono-Travel Advisor due to the lack of flying cars and excessive paperwork.",
  },
  {
    id: 6,
    question:
      "Do trees feel a sense of accomplishment when they reach the clouds?",
    answer:
      "They don't care much for height; they are mostly focused on the underground gossip traveling through the mycelium network.",
  },
];

export default data;
