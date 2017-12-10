let coordinator = new MultiviewCoordinator();

// subscribe to a `select` interaction with purpose `highlight`
coordinator.subscribe('mcv.select.highlight', (msg, data) => {
   console.log(msg, data);
});

// publish a topic asyncronously
coordinator.publish( 'mcv.select.highlight', 4711);
