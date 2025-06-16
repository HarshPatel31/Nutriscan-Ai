
export interface ExerciseAnimation {
  name: string;
  animation: string;
  description: string;
  tips: string[];
}

export const exerciseAnimations: { [key: string]: ExerciseAnimation } = {
  // Gym Exercises
  'Bench Press': {
    name: 'Bench Press',
    animation: '🏋️‍♂️',
    description: 'Lie on bench, lower bar to chest, press up',
    tips: ['Keep feet flat on floor', 'Arch back slightly', 'Control the descent']
  },
  'Squats': {
    name: 'Squats',
    animation: '🤸‍♂️',
    description: 'Stand with feet shoulder-width, lower hips back and down',
    tips: ['Keep knees behind toes', 'Chest up', 'Weight on heels']
  },
  'Deadlifts': {
    name: 'Deadlifts',
    animation: '🏋️‍♀️',
    description: 'Lift bar from floor by extending hips and knees',
    tips: ['Keep bar close to body', 'Straight back', 'Drive through heels']
  },
  'Pull-ups': {
    name: 'Pull-ups',
    animation: '🤸‍♀️',
    description: 'Hang from bar, pull body up until chin over bar',
    tips: ['Full range of motion', 'Control the descent', 'Engage lats']
  },
  'Push-ups': {
    name: 'Push-ups',
    animation: '🤲',
    description: 'Start in plank, lower chest to floor, push back up',
    tips: ['Keep body straight', 'Full range of motion', 'Breathe properly']
  },
  'Plank': {
    name: 'Plank',
    animation: '🧘‍♂️',
    description: 'Hold body straight in push-up position',
    tips: ['Keep hips level', 'Engage core', 'Breathe normally']
  },
  'Burpees': {
    name: 'Burpees',
    animation: '🤾‍♂️',
    description: 'Squat, jump back to plank, jump forward, jump up',
    tips: ['Move explosively', 'Land softly', 'Keep core tight']
  },
  'Lunges': {
    name: 'Lunges',
    animation: '🚶‍♀️',
    description: 'Step forward, lower back knee toward floor',
    tips: ['Keep front knee over ankle', '90-degree angles', 'Control the movement']
  },
  'Mountain Climbers': {
    name: 'Mountain Climbers',
    animation: '🧗‍♂️',
    description: 'Plank position, alternate driving knees to chest',
    tips: ['Keep hips level', 'Quick feet', 'Maintain plank form']
  },
  'Jumping Jacks': {
    name: 'Jumping Jacks',
    animation: '🤸',
    description: 'Jump feet apart while raising arms overhead',
    tips: ['Land softly', 'Keep core engaged', 'Smooth rhythm']
  },

  // Yoga Poses
  'Mountain Pose': {
    name: 'Mountain Pose',
    animation: '🧘‍♀️',
    description: 'Stand tall with feet together, arms at sides',
    tips: ['Ground through feet', 'Lengthen spine', 'Breathe deeply']
  },
  'Downward Dog': {
    name: 'Downward Dog',
    animation: '🐕',
    description: 'Hands and feet on ground, form inverted V-shape',
    tips: ['Press hands down', 'Lengthen spine', 'Relax head']
  },
  'Child\'s Pose': {
    name: 'Child\'s Pose',
    animation: '🙇‍♀️',
    description: 'Kneel, sit back on heels, fold forward with arms extended',
    tips: ['Breathe deeply', 'Relax shoulders', 'Rest forehead down']
  },
  'Warrior I': {
    name: 'Warrior I',
    animation: '🏹',
    description: 'Lunge position with arms raised overhead',
    tips: ['Square hips forward', 'Ground back foot', 'Reach up through arms']
  },
  'Tree Pose': {
    name: 'Tree Pose',
    animation: '🌳',
    description: 'Stand on one leg, place other foot on inner thigh',
    tips: ['Find focal point', 'Avoid pressing on knee', 'Engage standing leg']
  },
  'Cobra Pose': {
    name: 'Cobra Pose',
    animation: '🐍',
    description: 'Lie face down, press hands to lift chest',
    tips: ['Keep pelvis down', 'Open chest', 'Use back muscles']
  },
  'Bridge Pose': {
    name: 'Bridge Pose',
    animation: '🌉',
    description: 'Lie on back, lift hips up with feet planted',
    tips: ['Press feet down', 'Squeeze glutes', 'Keep knees parallel']
  },
  'Triangle Pose': {
    name: 'Triangle Pose',
    animation: '📐',
    description: 'Wide-legged forward fold with one hand to floor',
    tips: ['Keep both legs straight', 'Open chest', 'Lengthen both sides']
  },
  'Seated Forward Fold': {
    name: 'Seated Forward Fold',
    animation: '🪑',
    description: 'Sit with legs extended, fold forward over legs',
    tips: ['Hinge from hips', 'Keep spine long', 'Breathe into stretch']
  },
  'Cat-Cow Stretch': {
    name: 'Cat-Cow Stretch',
    animation: '🐱',
    description: 'On hands and knees, alternate arching and rounding spine',
    tips: ['Move with breath', 'Initiate from tailbone', 'Keep shoulders over wrists']
  },

  // Additional exercises with generic animations
  'Shoulder Press': { name: 'Shoulder Press', animation: '💪', description: 'Press weights overhead from shoulder height', tips: ['Keep core tight', 'Full range of motion', 'Control the weight'] },
  'Barbell Rows': { name: 'Barbell Rows', animation: '🏋️', description: 'Pull bar to lower chest while bent over', tips: ['Keep back straight', 'Squeeze shoulder blades', 'Control the weight'] },
  'Dips': { name: 'Dips', animation: '🤸', description: 'Lower body between parallel bars', tips: ['Lean slightly forward', 'Full range of motion', 'Control the descent'] },
  'Bicep Curls': { name: 'Bicep Curls', animation: '💪', description: 'Curl weights toward shoulders', tips: ['Keep elbows stable', 'Full range of motion', 'Control the negative'] },
  'Tricep Extensions': { name: 'Tricep Extensions', animation: '💪', description: 'Extend arms overhead or behind body', tips: ['Keep elbows stable', 'Full range of motion', 'Feel the stretch'] },
  'Leg Press': { name: 'Leg Press', animation: '🦵', description: 'Push weight with legs on machine', tips: ['Full range of motion', 'Control the weight', 'Keep knees aligned'] },
  'Calf Raises': { name: 'Calf Raises', animation: '🦵', description: 'Raise up onto toes, lower slowly', tips: ['Full range of motion', 'Control the descent', 'Squeeze at the top'] },
  'Wall Sit': { name: 'Wall Sit', animation: '🧱', description: 'Sit against wall with thighs parallel to floor', tips: ['Keep back flat against wall', 'Thighs parallel to floor', 'Breathe normally'] },
  'High Knees': { name: 'High Knees', animation: '🏃‍♂️', description: 'Run in place bringing knees to chest', tips: ['Keep torso upright', 'Quick feet', 'Land on balls of feet'] },
  'Butt Kicks': { name: 'Butt Kicks', animation: '🏃‍♀️', description: 'Run in place kicking heels to glutes', tips: ['Keep torso upright', 'Quick feet', 'Gentle contact with glutes'] }
};
