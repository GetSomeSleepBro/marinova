export async function getBadges(){
  const res = await fetch('/data/badges.json', { cache: 'no-store' })
  return res.json().catch(()=>[])
}

export async function getProjects(){
  const res = await fetch('/data/projects.json', { cache: 'force-cache' })
  return res.json().catch(()=>[])
}

export async function getDatasets(){
  const res = await fetch('/data/datasets.json', { cache: 'force-cache' })
  return res.json().catch(()=>[])
}

export async function getTrips(){
  const res = await fetch('/data/trips.json', { cache: 'no-store' })
  return res.json().catch(()=>[])
}

