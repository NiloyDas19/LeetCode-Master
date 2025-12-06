import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, ChevronRight, Sun, Moon, ExternalLink, CheckCircle, Circle } from 'lucide-react';

const LeetCodeProblems = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategories, setExpandedCategories] = useState(new Set());
  const [isDark, setIsDark] = useState(true);
  const [completedProblems, setCompletedProblems] = useState(new Set());

  // Load completed problems from state
  useEffect(() => {
    const saved = new Set();
    setCompletedProblems(saved);
  }, []);

  const problemLinks = {
    "Longest Palindromic Substring": "longest-palindromic-substring",
    "Integer to English Words": "integer-to-english-words",
    "Compare Version Numbers": "compare-version-numbers",
    "Longest Substring Without Repeating Characters": "longest-substring-without-repeating-characters",
    "Find the Closest Palindrome": "find-the-closest-palindrome",
    "Longest Duplicate Substring": "longest-duplicate-substring",
    "String to Integer (atoi)": "string-to-integer-atoi",
    "Regular Expression Matching": "regular-expression-matching",
    "Largest Number": "largest-number",
    "Longest Valid Parentheses": "longest-valid-parentheses",
    "Interleaving String": "interleaving-string",
    "Decode Ways": "decode-ways",
    "Reverse Words in a String": "reverse-words-in-a-string",
    "Wildcard Matching": "wildcard-matching",
    "Valid Parenthesis String": "valid-parenthesis-string",
    "Remove K Digits": "remove-k-digits",
    "Palindrome Partitioning II": "palindrome-partitioning-ii",
    "Decode Ways II": "decode-ways-ii",
    "Repeated String Match": "repeated-string-match",
    "Validate IP Address": "validate-ip-address",
    "One Edit Distance": "one-edit-distance",
    "Valid Number": "valid-number",
    "Substring with Concatenation of All Words": "substring-with-concatenation-of-all-words",
    "Strong Password Checker": "strong-password-checker",
    "Fraction to Recurring Decimal": "fraction-to-recurring-decimal",
    "Text Justification": "text-justification",
    "Shortest Palindrome": "shortest-palindrome",
    "Making File Names Unique": "making-file-names-unique",
    "Decoded String at Index": "decoded-string-at-index",
    "Split Array With Same Average": "split-array-with-same-average",
    "Count The Repetitions": "count-the-repetitions",
    "Median of Two Sorted Arrays": "median-of-two-sorted-arrays",
    "3Sum": "3sum",
    "Jump Game II": "jump-game-ii",
    "Maximum Product Subarray": "maximum-product-subarray",
    "Next Permutation": "next-permutation",
    "132 Pattern": "132-pattern",
    "Maximum Number of Events That Can Be Attended": "maximum-number-of-events-that-can-be-attended",
    "Surrounded Regions": "surrounded-regions",
    "Max Points on a Line": "max-points-on-a-line",
    "Next Greater Element III": "next-greater-element-iii",
    "Shortest Unsorted Continuous Subarray": "shortest-unsorted-continuous-subarray",
    "Reverse Pairs": "reverse-pairs",
    "Shortest Subarray with Sum at Least K": "shortest-subarray-with-sum-at-least-k",
    "Shortest Subarray to be Removed to Make Array Sorted": "shortest-subarray-to-be-removed-to-make-array-sorted",
    "Water and Jug Problem": "water-and-jug-problem",
    "Self Crossing": "self-crossing",
    "Non-decreasing Array": "non-decreasing-array",
    "Continuous Subarray Sum": "continuous-subarray-sum",
    "Dungeon Game": "dungeon-game",
    "Wiggle Sort II": "wiggle-sort-ii",
    "Ways to Split Array Into Three Subarrays": "ways-to-split-array-into-three-subarrays",
    "Maximum Non Negative Product in a Matrix": "maximum-non-negative-product-in-a-matrix",
    "Frequency of the Most Frequent Element": "frequency-of-the-most-frequent-element",
    "Maximum Number of Visible Points": "maximum-number-of-visible-points",
    "Closest Room": "closest-room",
    "Minimize the Difference Between Target and Chosen Elements": "minimize-the-difference-between-target-and-chosen-elements",
    "Word Ladder": "word-ladder",
    "Word Ladder II": "word-ladder-ii",
    "All O(1) Data Structure": "all-oone-data-structure",
    "Contains Duplicate III": "contains-duplicate-iii",
    "Invalid Transactions": "invalid-transactions",
    "Count Good Meals": "count-good-meals",
    "Make Sum Divisible by P": "make-sum-divisible-by-p",
    "Line Reflection": "line-reflection",
    "Best Time to Buy and Sell Stock IV": "best-time-to-buy-and-sell-stock-iv",
    "Maximum Score from Performing Multiplication Operations": "maximum-score-from-performing-multiplication-operations",
    "Super Egg Drop": "super-egg-drop",
    "Integer Replacement": "integer-replacement",
    "Largest Multiple of Three": "largest-multiple-of-three",
    "Number of Digit One": "number-of-digit-one",
    "Sum of Square Numbers": "sum-of-square-numbers",
    "Search in Rotated Sorted Array II": "search-in-rotated-sorted-array-ii",
    "Nth Digit": "nth-digit",
    "Create Maximum Number": "create-maximum-number",
    "Alien Dictionary": "alien-dictionary",
    "Validate Binary Search Tree": "validate-binary-search-tree",
    "Redundant Connection II": "redundant-connection-ii",
    "Kth Ancestor of a Tree Node": "kth-ancestor-of-a-tree-node",
    "Prime Palindrome": "prime-palindrome",
    "Pow(x, n)": "powx-n",
    "Sell Diminishing-Valued Colored Balls": "sell-diminishing-valued-colored-balls",
    "Design Twitter": "design-twitter",
    "Rotate List": "rotate-list",
    "Insert into a Sorted Circular Linked List": "insert-into-a-sorted-circular-linked-list",
    "Design Linked List": "design-linked-list",
    "Divide Two Integers": "divide-two-integers",
    "Nth Highest Salary": "nth-highest-salary",
    "Word Frequency": "word-frequency",
    "Longest Common Subpath": "longest-common-subpath"
  };

  const problems = {
    "String & String Algorithms": [
      "Longest Palindromic Substring",
      "Integer to English Words",
      "Compare Version Numbers",
      "Longest Substring Without Repeating Characters",
      "Find the Closest Palindrome",
      "Longest Duplicate Substring",
      "String to Integer (atoi)",
      "Regular Expression Matching",
      "Largest Number",
      "Longest Valid Parentheses",
      "Interleaving String",
      "Decode Ways",
      "Reverse Words in a String",
      "Wildcard Matching",
      "Valid Parenthesis String",
      "Remove K Digits",
      "Palindrome Partitioning II",
      "Decode Ways II",
      "Repeated String Match",
      "Validate IP Address",
      "One Edit Distance",
      "Valid Number",
      "Substring with Concatenation of All Words",
      "Strong Password Checker",
      "Fraction to Recurring Decimal",
      "Text Justification",
      "Shortest Palindrome",
      "Making File Names Unique",
      "Decoded String at Index",
      "Split Array With Same Average",
      "Count The Repetitions"
    ],
    "Array & Array Manipulation": [
      "Median of Two Sorted Arrays",
      "3Sum",
      "Jump Game II",
      "Maximum Product Subarray",
      "Next Permutation",
      "132 Pattern",
      "Maximum Number of Events That Can Be Attended",
      "Surrounded Regions",
      "Max Points on a Line",
      "Next Greater Element III",
      "Text Justification",
      "Shortest Unsorted Continuous Subarray",
      "Reverse Pairs",
      "Shortest Subarray with Sum at Least K",
      "Shortest Subarray to be Removed to Make Array Sorted",
      "Water and Jug Problem",
      "Making File Names Unique",
      "Self Crossing",
      "Non-decreasing Array",
      "Continuous Subarray Sum",
      "Dungeon Game",
      "Wiggle Sort II",
      "Ways to Split Array Into Three Subarrays",
      "Maximum Non Negative Product in a Matrix",
      "Frequency of the Most Frequent Element",
      "Maximum Number of Visible Points",
      "Closest Room",
      "Minimize the Difference Between Target and Chosen Elements"
    ],
    "Hash Table & Hashing": [
      "Word Ladder",
      "Word Ladder II",
      "Longest Substring Without Repeating Characters",
      "Fraction to Recurring Decimal",
      "Making File Names Unique",
      "Substring with Concatenation of All Words",
      "Max Points on a Line",
      "All O(1) Data Structure",
      "Contains Duplicate III",
      "Invalid Transactions",
      "Count Good Meals",
      "Make Sum Divisible by P",
      "Line Reflection"
    ],
    "Dynamic Programming (DP)": [
      "Longest Palindromic Substring",
      "Jump Game II",
      "Maximum Product Subarray",
      "Regular Expression Matching",
      "Best Time to Buy and Sell Stock IV",
      "Longest Valid Parentheses",
      "Interleaving String",
      "Decode Ways",
      "Wildcard Matching",
      "Valid Parenthesis String",
      "Dungeon Game",
      "Count The Repetitions",
      "Palindrome Partitioning II",
      "Decode Ways II",
      "Maximum Score from Performing Multiplication Operations",
      "Super Egg Drop",
      "Integer Replacement",
      "Split Array With Same Average",
      "Largest Multiple of Three",
      "Minimize the Difference Between Target and Chosen Elements",
      "Maximum Non Negative Product in a Matrix",
      "Number of Digit One"
    ],
    "Two Pointers Technique": [
      "Compare Version Numbers",
      "3Sum",
      "Next Permutation",
      "Reverse Words in a String",
      "One Edit Distance",
      "Shortest Unsorted Continuous Subarray",
      "Ways to Split Array Into Three Subarrays",
      "Sum of Square Numbers"
    ],
    "Binary Search": [
      "Median of Two Sorted Arrays",
      "132 Pattern",
      "Search in Rotated Sorted Array II",
      "Nth Digit",
      "Shortest Subarray with Sum at Least K"
    ],
    "Sorting & Order": [
      "3Sum",
      "Wiggle Sort II",
      "Maximum Number of Events That Can Be Attended",
      "Reverse Pairs",
      "Remove K Digits",
      "Invalid Transactions",
      "Frequency of the Most Frequent Element",
      "Closest Room"
    ],
    "Stack & Monotonic Stack": [
      "132 Pattern",
      "Longest Valid Parentheses",
      "Valid Parenthesis String",
      "Remove K Digits",
      "Create Maximum Number",
      "Shortest Unsorted Continuous Subarray",
      "Decoded String at Index"
    ],
    "Sliding Window": [
      "Longest Substring Without Repeating Characters",
      "Substring with Concatenation of All Words",
      "Contains Duplicate III",
      "Longest Duplicate Substring",
      "Frequency of the Most Frequent Element",
      "Maximum Number of Visible Points"
    ],
    "Tree & Graph (BFS/DFS/Topological Sort)": [
      "Alien Dictionary",
      "Validate Binary Search Tree",
      "Redundant Connection II",
      "Kth Ancestor of a Tree Node",
      "Surrounded Regions",
      "Water and Jug Problem"
    ],
    "Greedy Algorithms": [
      "Maximum Product Subarray",
      "Largest Number",
      "Strong Password Checker",
      "Valid Parenthesis String",
      "Remove K Digits",
      "Maximum Number of Events That Can Be Attended",
      "Split Array With Same Average",
      "Create Maximum Number",
      "Frequency of the Most Frequent Element",
      "Sell Diminishing-Valued Colored Balls"
    ],
    "Math & Number Theory": [
      "Integer to English Words",
      "Find the Closest Palindrome",
      "Prime Palindrome",
      "Pow(x, n)",
      "Fraction to Recurring Decimal",
      "Next Greater Element III",
      "Sum of Square Numbers",
      "Nth Digit",
      "Self Crossing",
      "Maximum Number of Visible Points",
      "Make Sum Divisible by P",
      "Number of Digit One",
      "Sell Diminishing-Valued Colored Balls"
    ],
    "Heap / Priority Queue": [
      "Maximum Number of Events That Can Be Attended",
      "Sell Diminishing-Valued Colored Balls",
      "Design Twitter",
      "Strong Password Checker"
    ],
    "Linked List": [
      "Rotate List",
      "All O(1) Data Structure",
      "Insert into a Sorted Circular Linked List",
      "Design Linked List",
      "Design Twitter"
    ],
    "Bit Manipulation / Bitmask": [
      "Divide Two Integers",
      "Split Array With Same Average",
      "Integer Replacement"
    ],
    "Design / System Design": [
      "All O(1) Data Structure",
      "Design Twitter",
      "Design Linked List",
      "Kth Ancestor of a Tree Node"
    ],
    "Database / SQL": [
      "Nth Highest Salary",
      "Word Frequency"
    ],
    "Advanced Patterns": {
      "Rolling Hash / Suffix Array / Hash Function": [
        "Longest Duplicate Substring",
        "Shortest Palindrome",
        "Longest Common Subpath"
      ],
      "Divide and Conquer": [
        "Median of Two Sorted Arrays",
        "Reverse Pairs",
        "Wiggle Sort II"
      ],
      "Union Find": [
        "Surrounded Regions",
        "Redundant Connection II"
      ],
      "Geometry": [
        "Max Points on a Line",
        "Self Crossing",
        "Maximum Number of Visible Points"
      ]
    }
  };

  const toggleCategory = (category) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setExpandedCategories(newExpanded);
  };

  const toggleProblem = (problem) => {
    const newCompleted = new Set(completedProblems);
    if (newCompleted.has(problem)) {
      newCompleted.delete(problem);
    } else {
      newCompleted.add(problem);
    }
    setCompletedProblems(newCompleted);
  };

  const expandAll = () => {
    const allCategories = new Set(Object.keys(problems));
    setExpandedCategories(allCategories);
  };

  const collapseAll = () => {
    setExpandedCategories(new Set());
  };

  const filterProblems = (problemList) => {
    if (!searchTerm) return problemList;
    return problemList.filter(problem => 
      problem.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const getTotalProblems = () => {
    let total = 0;
    Object.entries(problems).forEach(([key, value]) => {
      if (key === "Advanced Patterns") {
        Object.values(value).forEach(subList => {
          total += subList.length;
        });
      } else {
        total += value.length;
      }
    });
    return total;
  };

  const getCompletionPercentage = () => {
    return Math.round((completedProblems.size / getTotalProblems()) * 100);
  };

  const getLeetCodeUrl = (problemName) => {
    const slug = problemLinks[problemName];
    return slug ? `https://leetcode.com/problems/${slug}/` : null;
  };

  const bgClass = isDark 
    ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' 
    : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50';
  
  const cardBg = isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-200';
  const textPrimary = isDark ? 'text-white' : 'text-gray-900';
  const textSecondary = isDark ? 'text-gray-300' : 'text-gray-700';
  const textMuted = isDark ? 'text-gray-400' : 'text-gray-500';
  const hoverBg = isDark ? 'hover:bg-slate-700/50' : 'hover:bg-gray-50';
  const inputBg = isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-300';
  const buttonBg = isDark ? 'bg-slate-700 hover:bg-slate-600' : 'bg-gray-200 hover:bg-gray-300';
  const accentColor = isDark ? 'text-purple-400' : 'text-purple-600';

  return (
    <div className={`min-h-screen ${bgClass} transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`${isDark ? 'bg-slate-900/80' : 'bg-white/80'} backdrop-blur-md border-b ${isDark ? 'border-slate-700' : 'border-gray-200'} sticky top-0 z-50`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 rounded-lg ${isDark ? 'bg-gradient-to-br from-purple-500 to-blue-500' : 'bg-gradient-to-br from-purple-400 to-blue-400'} flex items-center justify-center text-white font-bold text-xl`}>
                LC
              </div>
              <div>
                <h1 className={`text-xl font-bold ${textPrimary}`}>LeetCode Master</h1>
                <p className={`text-xs ${textMuted}`}>Your path to FAANG</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className={`hidden md:flex items-center space-x-6 ${textSecondary} text-sm`}>
                <span>Progress: <span className={`font-bold ${accentColor}`}>{completedProblems.size}/{getTotalProblems()}</span></span>
                <span className={`px-3 py-1 rounded-full ${isDark ? 'bg-purple-900/50' : 'bg-purple-100'} ${accentColor} font-medium`}>
                  {getCompletionPercentage()}% Complete
                </span>
              </div>
              
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-lg ${buttonBg} ${textPrimary} transition-all transform hover:scale-110`}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-10">
          <h2 className={`text-4xl md:text-5xl font-bold ${textPrimary} mb-3`}>
            <span className={`bg-clip-text text-transparent ${isDark ? 'bg-gradient-to-r from-blue-400 to-purple-400' : 'bg-gradient-to-r from-blue-600 to-purple-600'}`}>
              90+ Essential Problems
            </span>
          </h2>
          <p className={`${textSecondary} text-lg mb-4`}>
            Curated list from Amazon SDE → Google SWE → LinkedIn Sr. SWE → Meta Sr. SWE
          </p>
          
          {/* Progress Bar */}
          <div className="max-w-md mx-auto">
            <div className={`h-3 ${isDark ? 'bg-slate-700' : 'bg-gray-200'} rounded-full overflow-hidden`}>
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
                style={{ width: `${getCompletionPercentage()}%` }}
              />
            </div>
          </div>
        </div>

        {/* Search and Controls */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className={`absolute left-4 top-3.5 ${textMuted}`} size={20} />
            <input
              type="text"
              placeholder="Search problems..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-12 pr-4 py-3 ${inputBg} border rounded-xl ${textPrimary} placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all`}
            />
          </div>
          
          <div className="flex flex-wrap gap-4 justify-between items-center">
            <div className={`${textSecondary} text-sm`}>
              <span className="md:hidden">Progress: <span className={`font-bold ${accentColor}`}>{completedProblems.size}/{getTotalProblems()}</span></span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={expandAll}
                className={`px-4 py-2 ${buttonBg} ${textPrimary} rounded-lg text-sm transition-all hover:scale-105`}
              >
                Expand All
              </button>
              <button
                onClick={collapseAll}
                className={`px-4 py-2 ${buttonBg} ${textPrimary} rounded-lg text-sm transition-all hover:scale-105`}
              >
                Collapse All
              </button>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-4">
          {Object.entries(problems).map(([category, items]) => {
            const isExpanded = expandedCategories.has(category);
            const isAdvanced = category === "Advanced Patterns";
            
            return (
              <div key={category} className={`${cardBg} backdrop-blur border rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl`}>
                <button
                  onClick={() => toggleCategory(category)}
                  className={`w-full px-6 py-4 flex items-center justify-between ${hoverBg} transition-all`}
                >
                  <div className="flex items-center space-x-3">
                    {isExpanded ? 
                      <ChevronDown size={20} className={accentColor} /> : 
                      <ChevronRight size={20} className={accentColor} />
                    }
                    <h2 className={`text-xl font-semibold ${textPrimary}`}>{category}</h2>
                    <span className={`text-sm px-3 py-1 rounded-full ${isDark ? 'bg-slate-700' : 'bg-gray-100'} ${textMuted}`}>
                      {isAdvanced ? Object.values(items).reduce((acc, arr) => acc + arr.length, 0) : items.length}
                    </span>
                  </div>
                </button>
                
                {isExpanded && (
                  <div className="px-6 pb-4">
                    {isAdvanced ? (
                      <div className="space-y-4">
                        {Object.entries(items).map(([subCategory, subItems]) => {
                          const filtered = filterProblems(subItems);
                          if (filtered.length === 0) return null;
                          
                          return (
                            <div key={subCategory}>
                              <h3 className={`text-lg font-medium ${accentColor} mb-3 mt-2`}>
                                {subCategory}
                              </h3>
                              <ul className="space-y-2">
                                {filtered.map((problem, idx) => {
                                  const url = getLeetCodeUrl(problem);
                                  const isCompleted = completedProblems.has(problem);
                                  return (
                                    <li key={idx} className={`flex items-center justify-between ${hoverBg} p-3 rounded-lg transition-all group`}>
                                      <div className="flex items-center space-x-3 flex-1">
                                        <button
                                          onClick={() => toggleProblem(problem)}
                                          className="flex-shrink-0"
                                        >
                                          {isCompleted ? 
                                            <CheckCircle size={20} className="text-green-500" /> : 
                                            <Circle size={20} className={textMuted} />
                                          }
                                        </button>
                                        <span className={`${isCompleted ? 'line-through opacity-60' : ''} ${textSecondary}`}>
                                          {problem}
                                        </span>
                                      </div>
                                      {url && (
                                        <a
                                          href={url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className={`flex items-center space-x-1 ${accentColor} opacity-0 group-hover:opacity-100 transition-all hover:underline text-sm`}
                                        >
                                          <span>Solve</span>
                                          <ExternalLink size={16} />
                                        </a>
                                      )}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <ul className="space-y-2">
                        {filterProblems(items).map((problem, idx) => {
                          const url = getLeetCodeUrl(problem);
                          const isCompleted = completedProblems.has(problem);
                          return (
                            <li key={idx} className={`flex items-center justify-between ${hoverBg} p-3 rounded-lg transition-all group`}>
                              <div className="flex items-center space-x-3 flex-1">
                                <button
                                  onClick={() => toggleProblem(problem)}
                                  className="flex-shrink-0"
                                >
                                  {isCompleted ? 
                                    <CheckCircle size={20} className="text-green-500" /> : 
                                    <Circle size={20} className={textMuted} />
                                  }
                                </button>
                                <span className={`${isCompleted ? 'line-through opacity-60' : ''} ${textSecondary}`}>
                                  {problem}
                                </span>
                              </div>
                              {url && (
                                <a
                                  href={url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`flex items-center space-x-1 ${accentColor} opacity-0 group-hover:opacity-100 transition-all hover:underline text-sm`}
                                >
                                  <span>Solve</span>
                                  <ExternalLink size={16} />
                                </a>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <footer className={`mt-12 py-8 border-t ${isDark ? 'border-slate-700' : 'border-gray-200'}`}>
          <div className="text-center space-y-4">
            <p className={`${textSecondary} text-sm`}>
              💡 Master these problems to strengthen your fundamentals and ace your interviews
            </p>
            <p className={`${textMuted} text-xs`}>
              Built with React & Tailwind CSS | Data curated from real interview experiences
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LeetCodeProblems;