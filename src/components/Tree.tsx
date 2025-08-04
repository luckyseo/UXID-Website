import React, { useState } from 'react';

const defaultEvents = [
  { date: '19 August 2025', title: 'Induction Day', tick: true },
  { date: '2 September 2025', title: 'First Workshop', tick: false },
  { date: '16 September 2025', title: 'Second Workshop', tick: false },
  { date: '30 September 2025', title: 'Third Workshop', tick: false },
  { date: '7 October 2025', title: 'Pitch Practice Day', tick: true },
  { date: '14 October 2025', title: 'Competition Day', tick: true },
];

const Tree = ({ events = defaultEvents, itemSpacing = 200 }) => {
  const [input, setInput] = useState('');
  const [eventList, setEventList] = useState(events);

  return (
    <div
      style={{
        width: '100%',
        minHeight: 600,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
     
        borderRadius: 32,
       
        boxSizing: 'border-box',
        position: 'relative',
      }}
    >
      <div style={{ flex: 1, position: 'relative', minHeight: 600, display: 'flex', justifyContent: 'center' }}>
        {eventList.length > 1 && eventList.map((_, idx) => {
          if (idx === eventList.length - 1) return null;
          const y1 = 60 + idx * itemSpacing + 28;
          const y2 = 60 + (idx + 1) * itemSpacing + 16;
          return (
            <div
              key={idx}
              style={{
                position: 'absolute',
                left: '50%',
                top: y1,
                width: 4,
                height: y2 - y1,
                background: 'white',
                borderRadius: 2,
                transform: 'translateX(-50%)',
                zIndex: 1,
              }}
            />
          );
        })}
        {eventList.map((event, idx) => {
          const isLeft = idx % 2 === 1;
          return (
            <div
              key={idx}
              style={{
                position: 'absolute',
                left: isLeft ? 'calc(50% - 250px)' : 'calc(50% + 32px)',
                top: 50 + idx * itemSpacing,
                width: 300,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                zIndex: 2,
              }}
            >
              <div style={{
                background: event.tick ? 'white' : 'transparent',
                borderRadius: 16,
                border: '2px solid white',
                padding: '16px',
                color: event.tick ? '#232323' : 'white',
                fontSize: 16,
                fontWeight: 500,
                boxShadow: event.tick ? '0 2px 8px rgba(0,0,0,0.10)' : 'none',
                minWidth: 220,
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                borderWidth: event.tick ? 2 : 2,
                borderStyle: 'solid',
                borderColor: 'white',
                transition: 'background 0.2s',
              }}>
                <div style={{ fontSize: 15, fontWeight: 400, marginBottom: 2 }}>{event.date}</div>
                <div style={{ fontSize: 18, fontWeight: 700 }}>{event.title}</div>
              </div>
            
            </div>
          );
        })}
        {eventList.map((_, idx) => (
          <div
            key={idx}
            style={{
              position: 'absolute',
              left: '50%',
              top: 60 + idx * itemSpacing + 16,
              width: 24,
              height: 24,
              background: 'white',
              borderRadius: '50%',
              border: '4px solid #fff',
              boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
              transform: 'translateX(-50%)',
              zIndex: 3,
            }}
          />
        ))}
      </div>

    
    </div>
  );
};

export default Tree;