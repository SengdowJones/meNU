import React from 'react';

const About = () => {
  return (
    <div className='grid grid-cols-4 gap-2 bg-white'>
      <div className='text-2xl text-center font-black'>
        <div class="relative mb-4 ">
            <label class="block ">
                <label for="email" class="text-sm leading-7 text-gray-600">Diet</label>
                <select
                    class="block w-full px-4 py-2 bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:ring-0">
                    <option>None</option>
                    <option>Vegetarian</option>
                    <option>Balanced</option>
                    <option>Avoiding Gluten</option>
                    <option>Vegan</option>
                </select>
            </label>
        </div>
      </div>
      <div className='text-2xl text-center font-black'>
        <div class="relative mb-4 ">
            <label class="block ">
                <label for="email" class="text-sm leading-7 text-gray-600">Macros</label>
                <select
                    class="block w-full px-4 py-2 bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:ring-0">
                    <option>Corporate event</option>
                    <option>Wedding</option>
                    <option>Birthday</option>
                    <option>Other</option>
                </select>
            </label>
        </div>
      </div>
      <div className='text-2xl text-center font-black'>
        <div class="relative mb-4 ">
            <label class="block ">
                <label for="email" class="text-sm leading-7 text-gray-600">Macros</label>
                <select
                    class="block w-full px-4 py-2 bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:ring-0">
                    <option>Carbohydrates</option>
                    <option>Fats</option>
                    <option>Protein</option>
                </select>
            </label>
        </div>
      </div>
      <div className='text-2xl text-center font-black'>
        <div class="relative mb-4 ">
            <label class="block ">
                <label for="email" class="text-sm leading-7 text-gray-600">Preferences</label>
                <select
                    class="block w-full px-4 py-2 bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:ring-0">
                    <option>Cal/Meal</option>
                    <option>Slots</option>
                    <option>Dining Hall</option>
                </select>
            </label>
        </div>
      </div>
    </div>
  );
};

export default About;
