// Default to a dummy(假的) "batch"(批量) implementation that just runs the callback
/* 这么写的有什么好处？？？ */
function defaultNoopBatch(callback) {
  callback()
}

let batch = defaultNoopBatch

// Allow injecting another batching function later
export const setBatch = newBatch => (batch = newBatch)

// Supply a getter just to skip dealing with ESM bindings
export const getBatch = () => batch
