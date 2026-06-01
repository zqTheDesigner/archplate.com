<template>
  <div>
    <q-img src="img/tree_at_agc.JPG" height="360px" />
    <div style="max-width: 800px" class="q-mx-auto">
      <h4 class="text-center">ArchPlate @ AGC</h4>
      <h6>Popup @ Mount Emily: Printmaking Workshops & Art Buffet</h6>
      <p>
        From April to June, a popup printmaking setup at Singapore Art Glass Centre offering ongoing
        workshops alongside more relaxed, open-format printmaking sessions.
      </p>

      <div>
        <p>
          Location: Singapore Art Glass Centre
          <br />
          Period: April – June 2026
          <br />
          Format: Workshops / Open Sessions / Art Buffet
        </p>
      </div>

      <p>
        Archplate Studio presents a temporary popup exploring contemporary printmaking through
        accessible and sustainable methods. The programme includes hands-on workshops, open
        sessions, and material-focused events, introducing etching and printmaking to a wider public
        while connecting practice, research, and material experimentation.
      </p>
      <div style="border-radius: 0.5rem" class="bg-amber-3">
        <p class="q-ma-md text-center">
          <b>For workshop / event appointment, kindly contact Qiao via WhatsApp: +65 9069 7196 </b>
        </p>
      </div>
      <div>
        <h4></h4>
        <q-table
          flat
          bordered
          title="Activity Schedule"
          :rows="rows"
          :columns="columns"
          row-key="name"
          separator="cell"
          hide-bottom
        />
      </div>

      <h4>What's Happening</h4>
      <div>
        <h6>Printmaking Workshops</h6>
        <p>
          Hands-on sessions focused on intaglio printing and etching processes. Participants
          experience how prints are created and gain a practical understanding of printmaking.
        </p>
      </div>

      <div>
        <h6>Art Buffet: Material Testing Sessions</h6>
        <p>
          Open-format sessions where participants explore a range of materials including inks,
          markers, and surfaces. Designed as a guided testing environment based on materials used in
          Archplate Studio.
        </p>
      </div>

      <div>
        <h6>Open House / Public Sessions</h6>
        <p>
          Casual, public-facing events with live demonstrations and introductions to printmaking
          processes. No prior experience required.
        </p>
      </div>
      <ComingSoon />
    </div>
  </div>
</template>

<script setup>
import ComingSoon from 'src/components/ComingSoon.vue'

const columns = [
  {
    name: 'activity',

    label: 'Activity',
    align: 'center',
    field: 'activity',
  },
  {
    name: 'time',
    align: 'center',
    label: 'Time',
    field: 'time',
  },
  {
    name: 'description',
    align: 'left',
    label: 'Description',
    field: 'description',
  },
]

const rows = [
  { activity: 'Soft Laungh', time: 'April', description: 'Workshops and 1st Art Buffet' },
  { activity: 'Workshop Focused', time: 'May', description: 'Workshops' },
  { activity: 'Expanded Programme', time: 'June', description: 'more workshops' },
]
</script>

<style lang="scss" scoped></style>
