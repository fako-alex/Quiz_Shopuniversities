import React, { useState, useEffect } from 'react';
import { BookOpen, Brain, Calculator, Trophy, Home, CheckCircle2, XCircle, School, GraduationCap } from 'lucide-react';
import { questions } from './questions';

type Level = '6ème' | '5ème' | '4ème';
type Screen = 'home' | 'level-select' | 'quiz' | 'result';

interface GameState {
  currentScreen: Screen;
  selectedLevel?: Level;
  currentQuestionIndex: number;
  score: number;
  selectedAnswers: string[];
}

function App() {
  const [gameState, setGameState] = useState<GameState>(() => {
    const savedState = localStorage.getItem('quizState');
    return savedState ? JSON.parse(savedState) : {
      currentScreen: 'home',
      currentQuestionIndex: 0,
      score: 0,
      selectedAnswers: []
    };
  });

  useEffect(() => {
    localStorage.setItem('quizState', JSON.stringify(gameState));
  }, [gameState]);

  const handleStartQuiz = () => {
    setGameState({
      ...gameState,
      currentScreen: 'level-select'
    });
  };

  const handleLevelSelect = (level: Level) => {
    setGameState({
      currentScreen: 'quiz',
      selectedLevel: level,
      currentQuestionIndex: 0,
      score: 0,
      selectedAnswers: []
    });
  };

  const getLevelQuestions = () => {
    return questions.filter(q => q.level === gameState.selectedLevel);
  };

  const handleAnswer = (answer: string) => {
    const levelQuestions = getLevelQuestions();
    const currentQuestion = levelQuestions[gameState.currentQuestionIndex];
    const isCorrect = answer === currentQuestion.correctAnswer;
    
    const newState = {
      ...gameState,
      score: isCorrect ? gameState.score + 1 : gameState.score,
      selectedAnswers: [...gameState.selectedAnswers, answer],
      currentQuestionIndex: gameState.currentQuestionIndex + 1,
      currentScreen: gameState.currentQuestionIndex === levelQuestions.length - 1 ? 'result' : 'quiz'
    };

    setGameState(newState);
  };

  const handleRestart = () => {
    setGameState({
      currentScreen: 'home',
      currentQuestionIndex: 0,
      score: 0,
      selectedAnswers: []
    });
  };

  const renderHome = () => (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-indigo-600 mb-8">Quiz Scratch pour Débutants</h1>
      <p className="text-xl text-gray-600 mb-12">Testez vos connaissances sur Scratch</p>
      <button
        onClick={handleStartQuiz}
        className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center space-y-4 mx-auto"
      >
        <BookOpen className="w-12 h-12 text-indigo-500" />
        <h2 className="text-2xl font-semibold text-gray-800">Commencer le Quiz</h2>
      </button>
    </div>
  );

  const renderLevelSelect = () => (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">Choisissez votre niveau</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {(['6ème', '5ème', '4ème'] as Level[]).map((level) => (
          <button
            key={level}
            onClick={() => handleLevelSelect(level)}
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">{level}</h3>
              <p className="text-gray-600 text-center">
                {level === '6ème' ? 'Concepts de base' :
                 level === '5ème' ? 'Notions intermédiaires' :
                 'Concepts avancés'}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  const renderQuiz = () => {
    const levelQuestions = getLevelQuestions();
    const currentQuestion = levelQuestions[gameState.currentQuestionIndex];
    return (
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              <School className="w-6 h-6 text-indigo-600" />
              <span className="text-lg font-medium text-gray-600">
                Niveau: {gameState.selectedLevel}
              </span>
            </div>
            <div className="flex space-x-4">
              <span className="text-lg font-medium text-gray-600">
                Question {gameState.currentQuestionIndex + 1}/{levelQuestions.length}
              </span>
              <span className="text-lg font-medium text-indigo-600">
                Score: {gameState.score}
              </span>
            </div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">{currentQuestion.question}</h2>
            <div className="grid grid-cols-1 gap-4">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="p-4 text-left rounded-lg border-2 border-gray-200 hover:border-indigo-500 hover:bg-indigo-50 transition-colors duration-200"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderResult = () => {
    const levelQuestions = getLevelQuestions();
    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Trophy className="w-20 h-20 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Quiz Terminé!</h2>
          <p className="text-xl text-gray-600 mb-2">
            Niveau: {gameState.selectedLevel}
          </p>
          <p className="text-xl text-gray-600 mb-8">
            Votre moyenne est de : {gameState.score} sur {levelQuestions.length}
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Révision des Questions</h3>
          {levelQuestions.map((question, index) => {
            const userAnswer = gameState.selectedAnswers[index];
            const isCorrect = userAnswer === question.correctAnswer;

            return (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-start space-x-4">
                  {isCorrect ? (
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  ) : (
                    <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  )}
                  <div className="flex-grow">
                    <h4 className="text-lg font-medium text-gray-800 mb-2">
                      Question {index + 1}: {question.question}
                    </h4>
                    
                    {userAnswer && (
                      <div className="mb-2">
                        <p className="font-medium">Votre réponse est : </p>
                        <p className={`ml-4 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                          {userAnswer}
                        </p>
                      </div>
                    )}
                    
                    {!isCorrect && (
                      <div className="mb-2">
                        <p className="font-medium">La bonne réponse était : </p>
                        <p className="ml-4 text-green-600">{question.correctAnswer}</p>
                      </div>
                    )}

                    {question.explanation && (
                      <div className="mt-2 text-gray-600 bg-gray-50 p-3 rounded-lg">
                        <p className="font-medium">Explication:</p>
                        <p className="ml-4">{question.explanation}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={handleRestart}
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 flex items-center space-x-2 mx-auto"
          >
            <Home className="w-5 h-5" />
            <span>Retour à l'accueil</span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-8">
      <div className="max-w-6xl mx-auto">
        {gameState.currentScreen === 'home' && renderHome()}
        {gameState.currentScreen === 'level-select' && renderLevelSelect()}
        {gameState.currentScreen === 'quiz' && renderQuiz()}
        {gameState.currentScreen === 'result' && renderResult()}
      </div>
    </div>
  );
}

export default App;