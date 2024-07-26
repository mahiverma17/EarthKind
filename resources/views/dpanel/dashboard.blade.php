@extends('dpanel.layouts.app')

@section('title', 'Dashboard')



@section('body_content')
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div class="bg-white rounded-md flex shadow-lg w-full overflow-hidden">
            <span class="p-3 bg-violet-500 flex items-center">
                <i class='bx bx-category alt'></i>
            </span>
            <div class="p-3">
                <p class="font-medium">Total Categories</p>
                <small class="text-gray-400">{{ $total['category'] }}</small>
            </div>
        </div>

        <div class="bg-white rounded-md flex shadow-lg w-full overflow-hidden">
            <span class="p-3 bg-yellow-500 flex items-center">
                <i class='bx bx-donate-heart'></i>
            </span>
            <div class="p-3">
                <p class="font-medium">Total Campaigns</p>
                <small class="text-gray-400">{{ $total['campaign'] }}</small>
            </div>
        </div>
        <div class="bg-white rounded-md flex shadow-lg w-full overflow-hidden">
            <span class="p-3 bg-green-500 flex items-center">
                <i class='bx bx-book-heart'></i>
            </span>
            <div class="p-3">
                <p class="font-medium">Total Active Campaigns</p>
                <small class="text-gray-400">{{ $total['activeCampaign'] }}</small>
            </div>
        </div>
        <div class="bg-white rounded-md flex shadow-lg w-full overflow-hidden">
            <span class="p-3 bg-red-500 flex items-center">
                <i class='bx bx-money-withdraw'></i>
            </span>
            <div class="p-3">
                <p class="font-medium">Total Raised Funds</p>
                <small class="text-gray-400">0</small>
            </div>
        </div>
        

    </div>

   

    {{-- Table --}}
    <section class="mt-4">
        <x-dpanel::table>
            <x-slot:thead>
                <tr>
                    <th scope="col" class="pl-3 py-2 text-left w-12 ">
                        #
                    </th>
                    <th scope="col" class="pl-3 py-2 text-left font-medium tracking-wider">
                        Name
                    </th>
                    <th scope="col" class="pl-3 py-2 text-left font-medium tracking-wider">
                        Campaign Category
                    </th>
                    <th scope="col" class="pl-3 py-2 text-left font-medium tracking-wider">
                        Phone Number
                    </th>
                    <th scope="col" class="pl-3 py-2 text-left font-medium tracking-wider">
                        Email Address
                    </th>
                    <th scope="col" class="pl-3 py-2 text-left font-medium tracking-wider">
                        Date Of Birth
                    </th>
                    
                    <th scope="col" class="pl-3 py-2 text-left font-medium tracking-wider">
                        Date
                    </th>

                    <th scope="col" class="pl-3 py-2 text-center font-medium tracking-wider">
                        Action
                    </th>
                </tr>
            </x-slot:thead>

            <x-slot:tbody>
                @foreach (range(1, 2) as $item)
                    <tr>
                        <td class="pl-3 py-2">
                            {{ $loop->iteration }}
                        </td>
                        <td class="pl-3 py-2">Mahi Verma</td>
                        <td class="pl-3 py-2">Dog</td>
                        <td class="pl-3 py-2">87915XXXXX</td>
                        <td class="pl-3 py-2">mahivermanancy2@gmail.com</td>
                        <td class="pl-3 py-2">02-06-2003</td>
                        
                        <td class="px-4 py-2">22-07-2024</td>
                        <td class="px-4 py-2 flex justify-center">
                            <a href="#"
                                class="ml-1 text-blue-500 bg-blue-100 focus:outline-none border border-blue-500 rounded-full w-6 h-6 flex justify-center items-center">
                                <i class='bx bx-edit'></i>
                            </a>
                        </td>
                    </tr>
                @endforeach

            </x-slot:tbody>

            <x-slot:pagination>
                {{-- Pagination --}}
            </x-slot:pagination>
        </x-dpanel::table>
    </section>

    {{-- Table End --}}

@endsection
