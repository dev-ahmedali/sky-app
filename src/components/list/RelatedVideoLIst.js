import React from 'react'
import RelatedVideoListItem from './RelatedVideoListItem'

export default function RelatedVideoLIst({currentVideoId, tags}) {
  return (
    <div>
        <div class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
           <RelatedVideoListItem/>
           
          </div>
    </div>
  )
}
