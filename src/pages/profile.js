import React from 'react';

class Profile extends React.Component {
  constructor() {
    super()
    this.state = {
      diet: "None"
    }
  }

  render () {
   return <div className='lg:text-xl md:text-sm grid px-12 py-1 grid-cols-4 gap-12 bg-white'>
      <div className='text-center font-black'>
        <div className="relative">
            <label className="block ">
                <label for="email" className="text-sm leading-7 text-gray-600">Diet</label>
                <select
                    className="block w-full px-4 py-2 bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:ring-0">
                    <option>None</option>
                    <option>Vegetarian</option>
                    <option>Balanced</option>
                    <option>Avoiding Gluten</option>
                    <option>Vegan</option>
                </select>
            </label>
        </div>
      </div>
      <div className='text-center font-black'>
        <div className="relative">
            <label className="block ">
                <label for="email" className="text-sm leading-7 text-gray-600">Allergies</label>
                <select
                    className="form-multiselect block w-full px-4 py-2 bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:ring-0" multiple>
                    <option>Dairy</option>
                    <option>Nuts</option>
                    <option>Shellfish</option>
                    <option>Eggs</option>
                    <option>Soy</option>
                </select>
            </label>
        </div>
      </div>
      <div className='text-center font-black'>
        <div className="relative">
            <label className="block ">
              <label for="email" className="text-sm leading-7 text-gray-600">Nutrients</label>
            </label>
            <label className="text-gray-800 font-semibold text-sm">Carbohydrates</label>
            <select
              className="block w-full px-4 py-2 bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:ring-0">
              <option>0%</option>
              <option>10%</option>
              <option>20%</option>
              <option>30%</option>
              <option>40%</option>
              <option>50%</option>
              <option>60%</option>
              <option>70%</option>
              <option>80%</option>
              <option>90%</option>
              <option>100%</option>
            </select>
            <label className="text-gray-800 font-semibold text-sm">Fats</label>
            <select
              className="block w-full px-4 py-2 bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:ring-0">
              <option>0%</option>
              <option>10%</option>
              <option>20%</option>
              <option>30%</option>
              <option>40%</option>
              <option>50%</option>
              <option>60%</option>
              <option>70%</option>
              <option>80%</option>
              <option>90%</option>
              <option>100%</option>
            </select>
            <label className="text-gray-800 font-semibold text-sm">Protein</label>
            <select
              className="block w-full px-4 py-2 bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:ring-0">
              <option>0%</option>
              <option>10%</option>
              <option>20%</option>
              <option>30%</option>
              <option>40%</option>
              <option>50%</option>
              <option>60%</option>
              <option>70%</option>
              <option>80%</option>
              <option>90%</option>
              <option>100%</option>
            </select>
        </div>
      </div>
      <div className='text-center font-black'>
        <div className="relative">
            <label className="block ">
              <label for="email" className="text-sm leading-7 text-gray-600">Preferences</label>
            </label>
            <label className="text-gray-800 font-semibold text-sm">Cal/Day</label>
            <select
                className="block w-full px-4 py-2 bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:ring-0">
                <option>1400 calories/day</option>
                <option>1600 calories/day</option>
                <option>1800 calories/day</option>
                <option>2000 calories/day</option>
                <option>2200 calories/day</option>
                <option>2400 calories/day</option>
                <option>2600 calories/day</option>
                <option>2800 calories/day</option>
                <option>3000 calories/day</option>
                <option>3200 calories/day</option>
            </select>
            <label className="text-gray-800 font-semibold text-sm">Daily Meals</label>
            <select
                    className="block w-full px-4 py-2 bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:ring-0">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            <label className="text-gray-800 font-semibold text-sm">Preferred Dining Hall</label>
            <select
                    className="block w-full px-4 py-2 bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:ring-0">
                    <option>Allison</option>
                    <option>Elder</option>
                    <option>Foster Walker Plex West</option>
                    <option>Sargent</option>
                </select>
        </div>
      </div>
      <div><button class="mt-6 text-white bg-indigo-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-800 rounded text-lg">Save</button></div>
    </div>;
    
  }
};

export default Profile;
