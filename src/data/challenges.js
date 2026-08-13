/**
 * TECHNOVA Practice Challenges Data
 * Demonstration practice challenges for skill development.
 * Clearly presented as self-paced practice.
 */

export const practiceCategories = ['All', 'Programming', 'Debugging', 'Logic', 'Web'];

export const practiceChallenges = [
  {
    id: 'prog-01',
    title: 'Two Sum Target Match',
    category: 'Programming',
    difficulty: 'Beginner',
    readTime: '5 min',
    shortDescription: 'Find the two indices in an integer array that add up to a specified target number.',
    description: 'Given an array of integers `nums` and an integer `target`, determine the indices of the two numbers such that they add up to the `target`. You may assume each input has exactly one solution.',
    codeSnippet: `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`,
    question: 'For input `nums = [2, 7, 11, 15]` and `target = 9`, what does `twoSum(nums, target)` return?',
    type: 'choice',
    options: ['[0, 1]', '[1, 2]', '[0, 2]', '[2, 3]'],
    correctAnswer: '[0, 1]',
    explanation: 'nums[0] + nums[1] = 2 + 7 = 9. Therefore, the matching indices are 0 and 1.',
    hint: 'Check which pair of elements in the array sum up to 9.'
  },
  {
    id: 'debug-01',
    title: 'Off-by-One Loop Boundary',
    category: 'Debugging',
    difficulty: 'Beginner',
    readTime: '4 min',
    shortDescription: 'Identify the indexing bug causing an undefined element access during iteration.',
    description: 'A developer wrote an iteration helper to calculate the total sum of elements in an array. However, in certain environments, it throws an `undefined` arithmetic error. Spot the error.',
    codeSnippet: `function computeSum(arr) {
  let total = 0;
  // Bug below: index bound condition
  for (let i = 0; i <= arr.length; i++) {
    total += arr[i];
  }
  return total;
}`,
    question: 'Which change corrects the loop condition?',
    type: 'choice',
    options: [
      'Change `i <= arr.length` to `i < arr.length`',
      'Change `i = 0` to `i = 1`',
      'Change `total += arr[i]` to `total = arr[i]`',
      'Change `arr.length` to `arr.length + 1`'
    ],
    correctAnswer: 'Change `i <= arr.length` to `i < arr.length`',
    explanation: 'Arrays are 0-indexed with valid indices from 0 to `arr.length - 1`. Iterating up to `<= arr.length` causes `arr[arr.length]` to be `undefined`, producing NaN when added to a number.',
    hint: 'What is the index of the final element in an array of length N?'
  },
  {
    id: 'logic-01',
    title: 'Missing Sequence Integer',
    category: 'Logic',
    difficulty: 'Beginner',
    readTime: '3 min',
    shortDescription: 'Use arithmetic summation logic to quickly find the missing number in 1 to N.',
    description: 'An array contains `n - 1` unique integers in the range from `1` to `n`. Exactly one integer is missing. What is the most efficient mathematical method to determine the missing number in O(n) time and O(1) space?',
    codeSnippet: `function findMissing(arr, n) {
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((acc, curr) => acc + curr, 0);
  return expectedSum - actualSum;
}`,
    question: 'If `arr = [1, 2, 4, 5, 6]` where `n = 6`, what is the missing number?',
    type: 'choice',
    options: ['3', '0', '7', '4'],
    correctAnswer: '3',
    explanation: 'Sum from 1 to 6 = 21. Actual array sum = 1 + 2 + 4 + 5 + 6 = 18. Expected - Actual = 21 - 18 = 3.',
    hint: "Use Gauss's formula: n * (n + 1) / 2."
  },
  {
    id: 'web-01',
    title: 'CSS Flexbox Perfect Centering',
    category: 'Web',
    difficulty: 'Beginner',
    readTime: '3 min',
    shortDescription: 'Select the standard modern CSS ruleset to center content horizontally and vertically.',
    description: 'You need to center a hero badge perfectly inside a container of variable height using modern CSS Flexbox layout.',
    codeSnippet: `.container {
  display: flex;
  /* Missing alignment properties */
}`,
    question: 'Which pair of properties achieves both horizontal and vertical center alignment?',
    type: 'choice',
    options: [
      'justify-content: center; align-items: center;',
      'text-align: center; vertical-align: middle;',
      'margin: auto 0; padding: center;',
      'float: center; position: center;'
    ],
    correctAnswer: 'justify-content: center; align-items: center;',
    explanation: 'In flexbox with row direction, `justify-content: center` centers along the main axis (horizontal) and `align-items: center` centers along the cross axis (vertical).',
    hint: 'Think about main axis vs cross axis in CSS Flexbox.'
  },
  {
    id: 'prog-02',
    title: 'Valid Palindrome Verification',
    category: 'Programming',
    difficulty: 'Intermediate',
    readTime: '6 min',
    shortDescription: 'Verify if a string reads the same forwards and backwards after sanitizing non-alphanumerics.',
    description: 'A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.',
    codeSnippet: `function isPalindrome(s) {
  const clean = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  let left = 0;
  let right = clean.length - 1;
  while (left < right) {
    if (clean[left] !== clean[right]) return false;
    left++;
    right--;
  }
  return true;
}`,
    question: 'What does `isPalindrome("A man, a plan, a canal: Panama")` evaluate to?',
    type: 'choice',
    options: ['true', 'false', 'undefined', 'TypeError'],
    correctAnswer: 'true',
    explanation: 'Sanitizing gives "amanaplanacanalpanama", which is identical forwards and backwards.',
    hint: 'Ignore whitespace, punctuation, and capitalization.'
  },
  {
    id: 'debug-02',
    title: 'Immutable State Mutation in Reducer',
    category: 'Debugging',
    difficulty: 'Intermediate',
    readTime: '6 min',
    shortDescription: 'Identify the improper direct array mutation causing components to skip re-rendering.',
    description: 'React state must be treated as immutable. In the following reducer handler, items are added to a list, but UI components fail to update because the reference does not change.',
    codeSnippet: `function handleAddItem(state, newItem) {
  // Bug: Direct mutation
  state.items.push(newItem);
  return state;
}`,
    question: 'How should the return statement be written to ensure immutability?',
    type: 'choice',
    options: [
      'return { ...state, items: [...state.items, newItem] };',
      'return state.items.concat(newItem);',
      'return Object.freeze(state);',
      'return state.push(newItem);'
    ],
    correctAnswer: 'return { ...state, items: [...state.items, newItem] };',
    explanation: 'Spreading creates a new state object and a new items array reference, signaling to React that state has changed.',
    hint: 'A new object reference is required for React state reconciliation.'
  },
  {
    id: 'logic-02',
    title: 'Unique Paths in Grid',
    category: 'Logic',
    difficulty: 'Intermediate',
    readTime: '5 min',
    shortDescription: 'Calculate the number of possible right-and-down moves from top-left to bottom-right of a 3x3 grid.',
    description: 'A robot is situated on a 3x3 grid. It can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner.',
    codeSnippet: `// Grid dimensions: m = 3, n = 3
// Moves needed: (m-1) Right + (n-1) Down = 2 Right + 2 Down
// Combinations: C(4, 2)`,
    question: 'How many unique paths are there in total for a 3x3 grid?',
    type: 'choice',
    options: ['6', '4', '8', '9'],
    correctAnswer: '6',
    explanation: 'The total moves is 4 (2 right, 2 down). The number of unique permutations is 4! / (2! * 2!) = 24 / 4 = 6.',
    hint: 'Use the combination formula: (m + n - 2)! / ((m - 1)! * (n - 1)!).'
  },
  {
    id: 'web-02',
    title: 'Debounce Search Input Concept',
    category: 'Web',
    difficulty: 'Intermediate',
    readTime: '5 min',
    shortDescription: 'Understand how debouncing delays execution until user keystrokes pause.',
    description: 'When implementing a live search bar that queries a list, why is debouncing applied on the input event listener?',
    codeSnippet: `function debounce(func, delay = 300) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}`,
    question: 'What is the primary benefit of debouncing keystroke events?',
    type: 'choice',
    options: [
      'It prevents redundant execution on every keystroke until typing pauses',
      'It runs the function immediately on each keystroke without delay',
      'It forces requests to run in parallel synchronously',
      'It prevents users from typing invalid characters'
    ],
    correctAnswer: 'It prevents redundant execution on every keystroke until typing pauses',
    explanation: 'Debouncing waits for a specified quiet period (e.g., 300ms) after the last keystroke before executing, minimizing unnecessary computations or API calls.',
    hint: 'Think about what happens if someone types 10 characters rapidly in 1 second.'
  }
];
