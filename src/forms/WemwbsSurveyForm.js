import React from 'react';
import { useForm } from 'react-hook-form';

export default function WemwbsSurveyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
      console.log("Submitted", data);
  }
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor="feelingOptimisticAboutFuture">I've been feeling optimistic about the future</label>
        <input {...register("feelingOptimisticAboutFuture", { required: {value: true, message: "This is required"}})} type="radio" value="1" />
        <input {...register("feelingOptimisticAboutFuture", { required: {value: true, message: "This is required"}})} type="radio" value="2" />
        <input {...register("feelingOptimisticAboutFuture", { required: {value: true, message: "This is required"}})} type="radio" value="3" />
        <input {...register("feelingOptimisticAboutFuture", { required: {value: true, message: "This is required"}})} type="radio" value="4" />
        <input {...register("feelingOptimisticAboutFuture", { required: {value: true, message: "This is required"}})} type="radio" value="5" />
        <p>{errors.feelingOptimisticAboutFuture?.message}</p>

        <br/>
        
        <label htmlFor="feelingUseful">I've been feeling useful</label>
        <input {...register("feelingUseful", { required: {value: true, message: "This is required"}})} type="radio" value="1" />
        <input {...register("feelingUseful", { required: {value: true, message: "This is required"}})} type="radio" value="2" />
        <input {...register("feelingUseful", { required: {value: true, message: "This is required"}})} type="radio" value="3" />
        <input {...register("feelingUseful", { required: {value: true, message: "This is required"}})} type="radio" value="4" />
        <input {...register("feelingUseful", { required: {value: true, message: "This is required"}})} type="radio" value=" 5" />
        <p>{errors.feelingUseful?.message}</p>

        <br/>

        <label htmlFor="feelingRelaxed">I've been feeling relaxed</label>
        <input {...register("feelingRelaxed", { required: {value: true, message: "This is required"}})} type="radio" value="1" />
        <input {...register("feelingRelaxed", { required: {value: true, message: "This is required"}})} type="radio" value="2" />
        <input {...register("feelingRelaxed", { required: {value: true, message: "This is required"}})} type="radio" value="3" />
        <input {...register("feelingRelaxed", { required: {value: true, message: "This is required"}})} type="radio" value="4" />
        <input {...register("feelingRelaxed", { required: {value: true, message: "This is required"}})} type="radio" value="5" />
        <p>{errors.feelingRelaxed?.message}</p>

       <br/>

        <label htmlFor="feelingInterestedInPeople">I've been feeling interested in other people</label>
        <input {...register("feelingInterestedInPeople", { required: {value: true, message: "This is required"}})} type="radio" value="1" />
        <input {...register("feelingInterestedInPeople", { required: {value: true, message: "This is required"}})} type="radio" value="2" />
        <input {...register("feelingInterestedInPeople", { required: {value: true, message: "This is required"}})} type="radio" value="3" />
        <input {...register("feelingInterestedInPeople", { required: {value: true, message: "This is required"}})} type="radio" value="4" />
        <input {...register("feelingInterestedInPeople", { required: {value: true, message: "This is required"}})} type="radio" value="5" />
        <p>{errors.feelingInterestedInPeople?.message}</p>

        <br/>

        <label htmlFor="havingEnergyToSpare">I've had energy to spare</label>
        <input {...register("havingEnergyToSpare", { required: {value: true, message: "This is required"}})} type="radio" value="1" />
        <input {...register("havingEnergyToSpare", { required: {value: true, message: "This is required"}})} type="radio" value="2" />
        <input {...register("havingEnergyToSpare", { required: {value: true, message: "This is required"}})} type="radio" value="3" />
        <input {...register("havingEnergyToSpare", { required: {value: true, message: "This is required"}})} type="radio" value="4" />
        <input {...register("havingEnergyToSpare", { required: {value: true, message: "This is required"}})} type="radio" value="5" />
        <p>{errors.havingEnergyToSpare?.message}</p>

        <br/>

        <label htmlFor="dealingWithProblemsWell">I've been dealing with problems well</label>
        <input {...register("dealingWithProblemsWell", { required: {value: true, message: "This is required"}})} type="radio" value="1" />
        <input {...register("dealingWithProblemsWell", { required: {value: true, message: "This is required"}})} type="radio" value="2" />
        <input {...register("dealingWithProblemsWell", { required: {value: true, message: "This is required"}})} type="radio" value="3" />
        <input {...register("dealingWithProblemsWell", { required: {value: true, message: "This is required"}})} type="radio" value="4" />
        <input {...register("dealingWithProblemsWell", { required: {value: true, message: "This is required"}})} type="radio" value="5" />
        <p>{errors.dealingWithProblemsWell?.message}</p>

        <br/>

        <label htmlFor="thinkingClearly">I've been thinking clearly</label>
        <input {...register("thinkingClearly", { required: {value: true, message: "This is required"}})} type="radio" value="1" />
        <input {...register("thinkingClearly", { required: {value: true, message: "This is required"}})} type="radio" value="2" />
        <input {...register("thinkingClearly", { required: {value: true, message: "This is required"}})} type="radio" value="3" />
        <input {...register("thinkingClearly", { required: {value: true, message: "This is required"}})} type="radio" value="4" />
        <input {...register("thinkingClearly", { required: {value: true, message: "This is required"}})} type="radio" value="5" />
        <p>{errors.thinkingClearly?.message}</p>

        <br/>

        <label htmlFor="feelingGoodSelf">I've been feeling good about myself</label>
        <input {...register("feelingGoodSelf", { required: {value: true, message: "This is required"}})} type="radio" value="1" />
        <input {...register("feelingGoodSelf", { required: {value: true, message: "This is required"}})} type="radio" value="2" />
        <input {...register("feelingGoodSelf", { required: {value: true, message: "This is required"}})} type="radio" value="3" />
        <input {...register("feelingGoodSelf", { required: {value: true, message: "This is required"}})} type="radio" value="4" />
        <input {...register("feelingGoodSelf", { required: {value: true, message: "This is required"}})} type="radio" value="5" />
        <p>{errors.feelingGoodSelf?.message}</p>

        <br/>

        <label htmlFor="feelingCloseToPeople">I've been feeling close to other people</label>
        <input {...register("feelingCloseToPeople", { required: {value: true, message: "This is required"}})} type="radio" value="1" />
        <input {...register("feelingCloseToPeople", { required: {value: true, message: "This is required"}})} type="radio" value="2" />
        <input {...register("feelingCloseToPeople", { required: {value: true, message: "This is required"}})} type="radio" value="3" />
        <input {...register("feelingCloseToPeople", { required: {value: true, message: "This is required"}})} type="radio" value="4" />
        <input {...register("feelingCloseToPeople", { required: {value: true, message: "This is required"}})} type="radio" value="5" />
        <p>{errors.feelingCloseToPeople?.message}</p>

        <br/>

        <label htmlFor="feelingConfident">I've been feeling confident</label>
        <input {...register("feelingConfident", { required: {value: true, message: "This is required"}})} type="radio" value="1" />
        <input {...register("feelingConfident", { required: {value: true, message: "This is required"}})} type="radio" value="2" />
        <input {...register("feelingConfident", { required: {value: true, message: "This is required"}})} type="radio" value="3" />
        <input {...register("feelingConfident", { required: {value: true, message: "This is required"}})} type="radio" value="4" />
        <input {...register("feelingConfident", { required: {value: true, message: "This is required"}})} type="radio" value="5" />
        <p>{errors.feelingConfident?.message}</p>

        <br/>

        <label htmlFor="makingUpOwnMind">I've been able to make up my own mind about things</label>
        <input {...register("makingUpOwnMind", { required: {value: true, message: "This is required"}})} type="radio" value="1" />
        <input {...register("makingUpOwnMind", { required: {value: true, message: "This is required"}})} type="radio" value="2" />
        <input {...register("makingUpOwnMind", { required: {value: true, message: "This is required"}})} type="radio" value="3" />
        <input {...register("makingUpOwnMind", { required: {value: true, message: "This is required"}})} type="radio" value="4" />
        <input {...register("makingUpOwnMind", { required: {value: true, message: "This is required"}})} type="radio" value="5" />
        <p>{errors.makingUpOwnMind?.message}</p>

        <br/>

        <label htmlFor="feelingLoved">I've been feeling loved</label>
        <input {...register("feelingLoved", { required: {value: true, message: "This is required"}})} type="radio" value="1" />
        <input {...register("feelingLoved", { required: {value: true, message: "This is required"}})} type="radio" value="2" />
        <input {...register("feelingLoved", { required: {value: true, message: "This is required"}})} type="radio" value="3" />
        <input {...register("feelingLoved", { required: {value: true, message: "This is required"}})} type="radio" value="4" />
        <input {...register("feelingLoved", { required: {value: true, message: "This is required"}})} type="radio" value="5" />
        <p>{errors.feelingLoved?.message}</p>

        <br/>

        <label htmlFor="feelingInterestNewThings">I've been interested in new things</label>
        <input {...register("feelingInterestNewThings", { required: {value: true, message: "This is required"}})} type="radio" value="1" />
        <input {...register("feelingInterestNewThings", { required: {value: true, message: "This is required"}})} type="radio" value="2" />
        <input {...register("feelingInterestNewThings", { required: {value: true, message: "This is required"}})} type="radio" value="3" />
        <input {...register("feelingInterestNewThings", { required: {value: true, message: "This is required"}})} type="radio" value="4" />
        <input {...register("feelingInterestNewThings", { required: {value: true, message: "This is required"}})} type="radio" value="5" />
        <p>{errors.feelingInterestNewThings?.message}</p>

        <br/>

        <label htmlFor="feelingCheerful">I've been feeling cheerful</label>
        <input {...register("feelingCheerful", { required: {value: true, message: "This is required"}})} type="radio" value="1" />
        <input {...register("feelingCheerful", { required: {value: true, message: "This is required"}})} type="radio" value="2" />
        <input {...register("feelingCheerful", { required: {value: true, message: "This is required"}})} type="radio" value="3" />
        <input {...register("feelingCheerful", { required: {value: true, message: "This is required"}})} type="radio" value="4" />
        <input {...register("feelingCheerful", { required: {value: true, message: "This is required"}})} type="radio" value="5" />
        <p>{errors.feelingCheerful?.message}</p>

        <br/>

        <input type="submit" />
    </form>
  );
}