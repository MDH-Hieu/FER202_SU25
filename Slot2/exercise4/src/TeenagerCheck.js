import React from 'react';

const people = [
  { name: 'Jack', age: 50 },
  { name: 'Michael', age: 9 },
  { name: 'John', age: 40 },
  { name: 'Ann', age: 19 },
  { name: 'Elisabeth', age: 16 }
];

function TeenagerCheck() {
  const firstTeenager = people.find(person => person.age >= 10 && person.age <= 20);
  const allTeenagers = people.filter(person => person.age >= 10 && person.age <= 20);
  const isEveryTeenager = people.every(person => person.age >= 10 && person.age <= 20);
  const isAnyTeenager = people.some(person => person.age >= 10 && person.age <= 20);

  return (
    <div className="custom-margin">
      <h2>Teenager Check</h2>
      <p><strong>First Teenager:</strong> {firstTeenager ? firstTeenager.name : 'None'}</p>
      <p><strong>All Teenagers:</strong> {allTeenagers.length > 0 ? allTeenagers.map(p => p.name).join(', ') : 'None'}</p>
      <p><strong>Is Every Person a Teenager?</strong> {isEveryTeenager ? 'Yes' : 'No'}</p>
      <p><strong>Is There Any Teenager?</strong> {isAnyTeenager ? 'Yes' : 'No'}</p>
    </div>
  );
}

export default TeenagerCheck;
